import React from "react";
import "./MiddleBanner.css"; // CSS 파일 임포트

function MiddleBanner() {
  return (
    <div className="banner-section">
      <h1 className="banner-title">지역 행사/축제</h1> {/* 제목 텍스트 추가 */}
      <div className="horizontal-banner">
        <div className="banner-image">
          <img
            src="https://gi.esmplus.com/jjumang/mani_bam01.png"
            alt="배너 이미지"
          />
        </div>
        <div className="middle-banner-text">
          <img
            src="https://gi.esmplus.com/jjumang/bamlogore.png"
            alt="서울 밤도깨비 야시장 로고"
            className="logo"
          />
          <h2>서울 밤도깨비 야시장</h2>
          <p>
            달빛을 배경으로 펼쳐지는 한 밤의 예술 시장,
            <br /> 한강 야시장이 돌아옵니다.
          </p>
          <button className="button">더 알아보기</button>
        </div>
      </div>
    </div>
  );
}

export default MiddleBanner;
