import React from "react";
import "./ContentsBanner.css"; // 배너 스타일을 위한 CSS 파일

function ContentsBanner() {
  return (
    <>
      {/* 컨테이너 밖에서의 제목 */}
      <h1 className="contentsbanner-title">Cangoroo's Pick </h1>

      <div className="contentsbanner-container">
        <div
          className="banner"
          style={{
            backgroundImage:
              "url(https://gi.esmplus.com/jjumang/01_tennisb.png)",
          }}
        >
          <div className="banner-text">
            <h2>테니스</h2>
            <p>따스한 봄바람과 잘 어울리는 테니스를 즐겨보세요.</p>
          </div>
        </div>
        <div
          className="banner"
          style={{ backgroundImage: "url(배너2의-이미지-URL)" }}
        >
          <div className="banner-text">
            <h2>이벤트 2</h2>
            <p>세일, 할인 등의 텍스트</p>
          </div>
        </div>
        <div
          className="banner"
          style={{ backgroundImage: "url(배너3의-이미지-URL)" }}
        >
          <div className="banner-text">
            <h2>이벤트 3</h2>
            <p>세일, 할인 등의 텍스트</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentsBanner;
