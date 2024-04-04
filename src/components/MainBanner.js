import React, { useState, useEffect } from 'react';
import './MainBanner.css'; // 배너 스타일을 위한 CSS 파일

// 이미지 URL 배열
const images = [
  "https://example.com/images/banner1.jpg",
  "https://example.com/images/banner2.jpg",
  "https://example.com/images/banner3.jpg",
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

  return (
    <div className="banner-container">
      <img src={images[currentIndex]} alt="banner" />
    </div>
  );
}

export default MainBanner;