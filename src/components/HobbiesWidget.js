import React, { useRef, useState } from "react";
import "./HobbiesWidget.css"; // 스타일 파일 임포트
import { meetings, companies } from "./HobbiesData"; // 모임 및 업체 데이터

function HobbiesWidget() {
  const scrollContainerRef = useRef(null);
  const [selectedHobbies, setSelectedHobbies] = useState("캠핑");

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  // 선택된 스포츠에 따라 모임 및 업체 데이터 필터링
  const filteredMeetings = meetings.filter(
    (meeting) => meeting.category === selectedHobbies
  );
  const filteredCompanies = companies.filter(
    (company) => company.category === selectedHobbies
  );

  const Hobbies = [
    {
      name: "캠핑",
      image: "https://gi.esmplus.com/jjumang/camp.png",
    },
    {
      name: "목공",
      image: "https://gi.esmplus.com/jjumang/wooden.png",
    },
    { name: "독서", image: "https://gi.esmplus.com/jjumang/read.png" },
    { name: "원예", image: "https://gi.esmplus.com/jjumang/plant.png" },
    {
      name: "수선",
      image: "https://gi.esmplus.com/jjumang/sewing.png",
    },
    { name: "요리", image: "https://gi.esmplus.com/jjumang/cooking.png" },
    { name: "베이킹", image: "https://gi.esmplus.com/jjumang/baking.png" },
    { name: "자수", image: "https://gi.esmplus.com/jjumang/jasu.png" },
    {
      name: "피아노",
      image: "https://gi.esmplus.com/jjumang/piano.png",
    },
    { name: "사진", image: "https://gi.esmplus.com/jjumang/picture.png" },
    {
      name: "비디오게임",
      image: "https://gi.esmplus.com/jjumang/videogame.png",
    },
    {
      name: "와인",
      image: "https://gi.esmplus.com/jjumang/wine.png",
    },
    {
      name: "글쓰기",
      image: "https://gi.esmplus.com/jjumang/writing.png",
    },
    {
      name: "체스",
      image: "https://gi.esmplus.com/jjumang/chess.png",
    },
    { name: "그림", image: "https://gi.esmplus.com/jjumang/draw.png" },
    {
      name: "기타",
      image: "https://gi.esmplus.com/jjumang/guitar.png",
    },
    { name: "낚시", image: "https://gi.esmplus.com/jjumang/fishing.png" },
    { name: "꽃꽂이", image: "https://gi.esmplus.com/jjumang/flower.png" },

    // 이하 생략
  ];

  return (
    <div>
      <div className="Hobbies-widget-container center">
        <button className="Hobbies-scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="Hobbies-scroll-container" ref={scrollContainerRef}>
          {Hobbies.map((Hobbies) => (
            <img
              key={Hobbies.name}
              src={Hobbies.image}
              alt={Hobbies.name}
              className={`Hobbies-scroll-item ${
                selectedHobbies === Hobbies.name ? "Hobbies-selected" : ""
              }`}
              onClick={() => setSelectedHobbies(Hobbies.name)}
            />
          ))}
        </div>
        <button className="Hobbies-scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>

      {/* 선택된 스포츠에 해당하는 모임 데이터 표시 */}
      <div className="Hobbies-meetings-container">
        {filteredMeetings.map((meeting) => (
          <div key={meeting.id} className="Hobbies-meeting-item">
            <img
              src={meeting.thumbnail}
              alt={meeting.name}
              className="Hobbies-thumbnail"
            />
            <h3>{meeting.name}</h3>
            <p>{meeting.location}</p>
            <p>{meeting.meetingDay}</p>
            <p>{meeting.fee}</p>
          </div>
        ))}
      </div>

      {/* 선택된 스포츠에 해당하는 업체 데이터 표시 */}
      <div className="Hobbies-companies-container">
        {filteredCompanies.map((company) => (
          <div key={company.id} className="Hobbies-company-item">
            <img
              src={company.thumbnail}
              alt={company.name}
              className="Hobbies-thumbnail"
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

export default HobbiesWidget;
