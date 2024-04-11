import React from "react";
import "./MiddleBanner.css"; // CSS 파일 임포트

function MiddleBanner() {
  // "더 알아보기" 버튼을 클릭했을 때 수행할 함수
  const handleLearnMoreClick = () => {
    console.log("더 알아보기 클릭!");
    // 여기에 더 알아보기 클릭 시 수행할 로직 추가
  };

  return (
    <div className="horizontal-banner">
      <div className="banner-image">
        {/* 이미지 삽입 */}
        <img src="https://gi.esmplus.com/jjumang/dive.jpg" alt="배너 이미지" />
      </div>
      <div className="banner-text">
        {/* 텍스트 내용 */}
        <h2>지역정보</h2>
        <p>내용 설명이 들어갑니다. 여기에 텍스트를 추가하세요.</p>
        <button onClick={handleLearnMoreClick} className="button">
          더 알아보기
        </button>
      </div>
    </div>
  );
}

export default MiddleBanner;
