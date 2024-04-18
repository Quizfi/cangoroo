import React, { useRef, useState } from "react";
import "./SportsWidget.css"; // 스타일 파일 임포트
import { meetings, companies } from "./ClubData"; // 모임 및 업체 데이터

function SportsWidget() {
  const scrollContainerRef = useRef(null);
  const [selectedSport, setSelectedSport] = useState("축구"); // 초기값 "축구"

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  // 선택된 스포츠에 따라 모임 및 업체 데이터 필터링
  const filteredMeetings = meetings.filter(
    (meeting) => meeting.category === selectedSport
  );
  const filteredCompanies = companies.filter(
    (company) => company.category === selectedSport
  );

  const sports = [
    { name: "축구", image: "https://gi.esmplus.com/jjumang/01_football.png" },
    { name: "야구", image: "https://gi.esmplus.com/jjumang/02_baseball.png" },
    { name: "농구", image: "https://gi.esmplus.com/jjumang/03_basketball.png" },
    { name: "테니스", image: "https://gi.esmplus.com/jjumang/04_tennis.png" },
    {
      name: "배드민턴",
      image: "https://gi.esmplus.com/jjumang/05_badminton.png",
    },
    { name: "볼링", image: "https://gi.esmplus.com/jjumang/06_ballring.png" },
    { name: "달리기", image: "https://gi.esmplus.com/jjumang/07_running.png" },
    { name: "복싱", image: "https://gi.esmplus.com/jjumang/08_boxing.png" },
    {
      name: "탁구",
      image: "https://gi.esmplus.com/jjumang/09_tabletennis.png",
    },
    { name: "골프", image: "https://gi.esmplus.com/jjumang/10_golf.png" },
    { name: "배구", image: "https://gi.esmplus.com/jjumang/11_valleyball.png" },
    { name: "럭비", image: "https://gi.esmplus.com/jjumang/12_americafb.png" },
    {
      name: "스케이트",
      image: "https://gi.esmplus.com/jjumang/13_skate.png",
    },
    {
      name: "포켓볼",
      image: "https://gi.esmplus.com/jjumang/14_poket.png",
    },
    { name: "주짓수", image: "https://gi.esmplus.com/jjumang/15_jujitsu.png" },
    { name: "사이클", image: "https://gi.esmplus.com/jjumang/16_bicycle.png" },
    { name: "수영", image: "https://gi.esmplus.com/jjumang/17_swim.png" },
    { name: "스키", image: "https://gi.esmplus.com/jjumang/18_ski.png" },

    // 이하 생략
  ];

  return (
    <div>
      <div className="sports-widget-container center">
        <button className="sports-scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="sports-scroll-container" ref={scrollContainerRef}>
          {sports.map((sport) => (
            <img
              key={sport.name}
              src={sport.image}
              alt={sport.name}
              className={`sports-scroll-item ${
                selectedSport === sport.name ? "sports-selected" : ""
              }`}
              onClick={() => setSelectedSport(sport.name)}
            />
          ))}
        </div>
        <button className="sports-scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>

      {/* 선택된 스포츠에 해당하는 모임 데이터 표시 */}
      <div className="sports-meetings-container">
        {filteredMeetings.map((meeting) => (
          <div key={meeting.id} className="sports-meeting-item">
            <img
              src={meeting.thumbnail}
              alt={meeting.name}
              className="sports-thumbnail"
            />
            <h3>{meeting.name}</h3>
            <p>{meeting.location}</p>
            <p>{meeting.meetingDay}</p>
            <p>{meeting.fee}</p>
          </div>
        ))}
      </div>

      {/* 선택된 스포츠에 해당하는 업체 데이터 표시 */}
      <div className="sports-companies-container">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="sports-company-item">
            <img
              src={company.thumbnail}
              alt={company.name}
              className="sports-thumbnail"
            />
            <h3>{company.name}</h3>
            <p>{company.location}</p>
            <p>{company.time}</p>
            <p>{company.fee}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SportsWidget;
