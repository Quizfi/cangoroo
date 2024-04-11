import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainBanner.css"; // CSS 파일 이름과 경로가 정확한지 확인

function MainBanner() {
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 인덱스 상태
  const sliderRef = useRef(null); // sliderRef 생성

  const totalSlides = 12; // 전체 슬라이드 개수 (실제 슬라이드 개수에 따라 조정)

  const settings = {
    dots: false, // 기본 닷 비활성화
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "520px",
    beforeChange: (current, next) => setCurrentIndex(next), // 현재 인덱스 업데이트
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/sports_re.jpg"
            alt="배너1"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/culture_re.jpg"
            alt="배너2"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/hobby_rere.jpg"
            alt="배너3"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/hobby2.jpg"
            alt="배너4"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/band.jpg"
            alt="배너5"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/camping.jpg"
            alt="배너6"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/tennis.jpg"
            alt="배너7"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/book.jpg"
            alt="배너8"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/tabletennis.jpg"
            alt="배너9"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/draw.jpg"
            alt="배너10"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/plant.jpg"
            alt="배너11"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        <div>
          <img
            src="https://gi.esmplus.com/jjumang/dive.jpg"
            alt="배너12"
            className="main-banner-image" // 클래스 추가
          />
        </div>
        {/* 추가 이미지 */}
      </Slider>
      <div className="custom-pagination">
        {/* 이전 버튼 */}
        <button onClick={() => sliderRef.current.slickPrev()}>&lt;</button>
        {/* 현재 페이지 / 총 페이지 */}
        {`${currentIndex + 1} / ${totalSlides}`}
        {/* 다음 버튼 */}
        <button onClick={() => sliderRef.current.slickNext()}>&gt;</button>
      </div>
    </>
  );
}

export default MainBanner;
