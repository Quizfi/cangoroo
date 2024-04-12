import React from "react";
import "./ContentsBanner.css"; // 배너 스타일을 위한 CSS 파일

function ContentsBanner() {
  return (
    <>
      {/* 컨테이너 밖에서의 제목 */}
      <h1 className="contentsbanner-title">캔고루 추천 Pick</h1>
      <div className="contentsbanner-container">
        <div className="banner-content">
          <img
            src="https://gi.esmplus.com/jjumang/01_tennisb.png"
            alt="테니스"
          />
          <div className="banner-text">
            <h2>테니스</h2>
            <p>따스한 봄바람과 잘 어울리는 테니스를 즐겨보세요.</p>
          </div>
        </div>
        <div className="banner-content">
          <img
            src="https://gi.esmplus.com/jjumang/hobbycontentsbn.png"
            alt="도자기 공예"
          />
          <div className="banner-text">
            <h2>도자기 공예</h2>
            <p>나만의 작품을 만들어보세요.</p>
          </div>
        </div>
        <div className="banner-content">
          <img
            src="https://gi.esmplus.com/jjumang/museum2.png"
            alt="스튜디오 지브리"
          />
          <div className="banner-text">
            <h2>스튜디오 지브리</h2>
            <p>타카하다 이사오展</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsBanner;
