import React, { useState, useEffect } from "react";
import "./MainBanner.css"; // 배너 스타일을 위한 CSS 파일
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// 이미지 URL 배열
const images = [
  "https://gi.esmplus.com/jjumang/sportsre.jpg",
  "https://gi.esmplus.com/jjumang/culture.jpg",
  "https://gi.esmplus.com/jjumang/hobby.jpg",
  // 추가 이미지 URL
];

function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 표시되는 이미지의 인덱스

  useEffect(() => {
    const timer = setInterval(() => {
      // 다음 이미지로 순환
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3초마다 이미지 변경

    return () => clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머 제거
  }, []);

  // 이전 이미지로 이동
  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // 다음 이미지로 이동
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="banner-container">
      <button onClick={goToPrevious}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <img src={images[currentIndex]} alt="banner" />
      <button onClick={goToNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default MainBanner;
