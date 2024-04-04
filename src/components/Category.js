import React, { useState } from 'react';
import './Category.css'; // 스타일을 위한 CSS 파일

function Category() {
  const [showSportsDropdown, setShowSportsDropdown] = useState(false); // 드롭다운 표시 상태

  return (
    <nav className="category-menu">
      <ul>
        <li onMouseEnter={() => setShowSportsDropdown(true)} onMouseLeave={() => setShowSportsDropdown(false)}>
        🏈스포츠
          {showSportsDropdown && (
            <ul className="dropdown">
              <li>축구</li>
              <li>야구</li>
              <li>배구</li>
              {/* 추가 스포츠 카테고리 */}
            </ul>
          )}
        </li>
        <li>🎨취미활동</li>
        <li>🎭문화생활</li>
        <li>🛍️샵</li>
        <li>👫팀/파트너 찾기</li>
        <li>🗺️ 지역정보</li>
        <li>📣커뮤니티</li>
      </ul>
    </nav>
  );
}

export default Category;