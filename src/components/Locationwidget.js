import React from "react";
import "./Locationwidget.css"; // 스타일시트 파일

function Locationwidget() {
  const events = [
    {
      id: 1,
      name: "남이섬 홀리-하이 축제",
      image: "https://gi.esmplus.com/jjumang/holihai.png",
      location: "강원도 춘선시",
      details: "2024.04.13",
    },
    {
      id: 2,
      name: "영주 선비문화축제",
      image: "https://gi.esmplus.com/jjumang/youngju.png",
      location: "경상북도 영주시",
      details: "2024.05.04~05.06",
    },
    {
      id: 3,
      name: "제주 입목문화축제",
      image: "https://gi.esmplus.com/jjumang/jejuhorse.png",
      location: "제주도 제주시",
      details: "2024.04.27~28",
    },
    {
      id: 4,
      name: "의령 홍의장군축제",
      image: "https://gi.esmplus.com/jjumang/hongfesta.png",
      location: "경상남도 의령군",
      details: "2024.04.18~04.21",
    },
    {
      id: 5,
      name: "광주문화유산야행",
      image: "https://gi.esmplus.com/jjumang/gwangju.png",
      location: "강원도 춘선시",
      details: "2024.04.26~04.27",
    },
    {
      id: 6,
      name: "에덴벚꽃길 벚꽃축제",
      image: "https://gi.esmplus.com/jjumang/eden.png",
      location: "경기도 가평군",
      details: "2024.04.06~04.14",
    },
    {
      id: 7,
      name: "부여문화유산야행",
      image: "https://gi.esmplus.com/jjumang/buyeo.png",
      location: "충청남도 부여군",
      details: "2024.04.13~04.14",
    },
    {
      id: 8,
      name: "아산 성웅이순신축제",
      image: "https://gi.esmplus.com/jjumang/leesunsin.png",
      location: "충청남도 아산시",
      details: "2024.04.24~04.28",
    },
    {
      id: 9,
      name: "대전 한우숯불구이축제",
      image: "https://gi.esmplus.com/jjumang/daejeonbbq.png",
      location: "대전시 중구",
      details: "2024.04.09~04.14",
    },
    {
      id: 10,
      name: "대구 떡볶이페스티벌",
      image: "https://gi.esmplus.com/jjumang/daegutteok.png",
      location: "대구시 북구",
      details: "2024.05.04~05.05",
    },
    {
      id: 11,
      name: "보배섬 유채꽃 마을축제",
      image: "https://gi.esmplus.com/jjumang/bobae.png",
      location: "전라남도 진도군",
      details: "2024.04.12~04.14",
    },
    {
      id: 12,
      name: "서울 릴렉스위크",
      image: "https://gi.esmplus.com/jjumang/relax.png",
      location: "서울시 중구",
      details: "2024.04.01~04.30",
    },

    // 추가 행사 정보...
  ];

  return (
    <div className="event-widget">
      <div className="event-scroll-container">
        {events.map((event) => (
          <div key={event.id} className="event-item">
            <img src={event.image} alt={event.name} className="event-image" />
            <div className="event-info">
              <h3>{event.name}</h3>
              <p>{event.details}</p>
              <p>{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locationwidget;
