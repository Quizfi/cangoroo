import React from "react";
import "./Partner.css"; // 스타일 시트 연결

function Partner() {
  // 예제 데이터
  const meetings = [
    {
      id: 1,
      title: "풋살 용병 모집(3인)",
      description: "4월 17일 21시",
      location: "서울시 송파구",
      image: "https://gi.esmplus.com/jjumang/football.png",
    },
    {
      id: 2,
      title: "주말 등산 모집",
      description: "4월 28일 09시",
      location: "청계산 입구",
      image: "https://gi.esmplus.com/jjumang/mountain.png",
    },
    {
      id: 3,
      title: "골프 라운딩 모집",
      description: "5월 4일 13시",
      location: "양지 파인cc",
      image: "https://gi.esmplus.com/jjumang/golf.png",
    },
    {
      id: 4,
      title: "볼링 번개(4인)",
      description: "4월 17일 18시",
      location: "서울시 강남구",
      image: "https://gi.esmplus.com/jjumang/ballring.png",
    },
    {
      id: 5,
      title: "사이클 인원 모집",
      description: "4월 17일 17시",
      location: "탄천~죽전",
      image: "https://gi.esmplus.com/jjumang/cycle.png",
    },
    {
      id: 6,
      title: "탁구 파트너 모집",
      description: "4월 19일 19시",
      location: "수원시 팔달구",
      image: "https://gi.esmplus.com/jjumang/tabletennis.png",
    },
    {
      id: 7,
      title: "배드민턴 번개(2인)",
      description: "4월 25일 22시",
      location: "경기도 부천시",
      image: "https://gi.esmplus.com/jjumang/badminton.png",
    },
    {
      id: 8,
      title: "농구 용병 모집",
      description: "4월 19일 18시",
      location: "서울시 광진구",
      image: "https://gi.esmplus.com/jjumang/basket.png",
    },
    {
      id: 9,
      title: "야구 용병 모집(3인)",
      description: "4월 14일 10시",
      location: "경기도 구리시",
      image: "https://gi.esmplus.com/jjumang/baseball.png",
    },
    {
      id: 10,
      title: "테니스 파트너 모집",
      description: "4월 17일 21시",
      location: "서울시 송파구",
      image: "https://gi.esmplus.com/jjumang/tennis.png",
    },

    // 추가 모임 데이터
  ];

  return (
    <div className="partner-container">
      <h1 className="partner-title">#오늘 모임 어때요?</h1>
      <div className="meetings-scroll-container">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="meeting">
            <img src={meeting.image} alt={meeting.title} />
            <h2>{meeting.title}</h2>
            <p>{meeting.description}</p>
            <p>{meeting.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partner;
