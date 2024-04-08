import React, { useRef } from "react";
import "./SportsWidget.css"; // 스타일 파일 임포트

function SportsWidget() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -100, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: 100, behavior: "smooth" });
  };

  return (
    <div>
      <h2 className="sports-title">스포츠 모임 들어가기</h2>
      <div className="widget-container center">
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>
        <div className="scroll-container" ref={scrollContainerRef}>
          <img
            src="https://gi.esmplus.com/jjumang/01_footballc.png"
            alt="축구"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/02_baseball.png"
            alt="야구"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/03_basketball.png"
            alt="농구"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/04_tennis.png"
            alt="테니스"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/05_badminton.png"
            alt="배드민턴"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/06_ballring.png"
            alt="볼링"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/07_running.png"
            alt="달리기"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/08_boxing.png"
            alt="복싱"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/09_tabletennis.png"
            alt="탁구"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/10_golf.png"
            alt="골프"
            className="scroll-item"
          />
          <img
            src="https://gi.esmplus.com/jjumang/11_valleyball.png"
            alt="배구"
            className="scroll-item"
          />
          {/* 추가 항목 */}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default SportsWidget;
