import React, { useState } from "react";
import "./Category.css"; // 스타일을 위한 CSS 파일

function Category() {
  const [showSportsDropdown, setShowSportsDropdown] = useState(false); // 드롭다운 표시 상태

  return (
    <nav className="category-menu">
      <ul>
        <li
          onMouseEnter={() => setShowSportsDropdown(true)}
          onMouseLeave={() => setShowSportsDropdown(false)}
        >
          🏈스포츠
          {showSportsDropdown && (
            <ul className="submenu">
              <li>⚽축구</li>
              <li>⚾야구</li>
              <li>🏀농구</li>
              <li>🏐배구</li>
              <li>🎾테니스</li>
              <li>🏸배드민턴</li>
              <li>🏌️‍♂️골프</li>
              <li>⚽풋살</li>
              <li>🏓탁구</li>
              <li>🏊수영</li>
              <li>🥊복싱</li>
              <li>🧗클라이밍</li>
              <li>🏄서핑</li>
              <li>🎳볼링</li>
              <br />
              <li>🏃러닝</li>
              <li>🚴사이클</li>
              <li>⛸스케이팅</li>
              <li>🏇승마</li>
              <li>🥋주짓수</li>
              <li>🥋유도</li>
              <li>🥋태권도</li>
              <li>🎯사격</li>
              <li>🏒아이스하키</li>
              <li>🏋️피트니스</li>
              <li>🎮e스포츠</li>
              <li>🎲기타</li>
              {/* 추가 스포츠 카테고리 */}
            </ul>
          )}
        </li>
        <li>🎨취미활동</li>
        <li>🎭문화생활</li>
        <li>🛍️용품/샵</li>
        <li>👫팀/파트너 찾기</li>
        <li>🗺️ 지역정보</li>
        <li>📣커뮤니티</li>
      </ul>
    </nav>
  );
}

export default Category;
