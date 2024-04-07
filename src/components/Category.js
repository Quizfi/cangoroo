import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Category.css';

function Category() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="category-menu">
      <ul className="main-category-list">
        {/* "전체카테고리" 메뉴 별도 처리 */}
        <li className="all-categories" onMouseOver={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
          전체카테고리
          {showDropdown && (
            <div className="dropdown-content">
              {/* 드롭다운 메뉴 항목 */}
              <Link to="/sports">스포츠</Link>
              <Link to="/hobbies">취미활동</Link>
              <Link to="/culture">문화생활</Link>
              {/* 추가 드롭다운 메뉴 항목 */}
            </div>
          )}
        </li>
        {/* 상단 카테고리 항목들을 별도로 렌더링 */}
        <li><Link to="/sports">스포츠</Link></li>
        <li><Link to="/hobbies">취미활동</Link></li>
        <li><Link to="/culture">문화생활</Link></li>
        <li><Link to="/shop">용품/샵</Link></li>
        <li><Link to="/partner">파트너/팀 찾기</Link></li>
        <li><Link to="/location">지역정보</Link></li>
        <li><Link to="/notices">공지사항</Link></li>
      </ul>
    </div>
  );
}

export default Category;

