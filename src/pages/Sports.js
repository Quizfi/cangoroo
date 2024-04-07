import React from 'react';
import { Link } from 'react-router-dom';
import NavigationBar from "../components/NavigationBar"; // 수정된 경로

function Sports() {
  return (
    <div> {/* 모든 내용을 하나의 <div>로 감싸기 */}
      <NavigationBar />
      <div className="category-menu">
        <ul className="main-category-list">
          <li><Link to="/sports">스포츠</Link></li>
          <li><Link to="/hobbies">취미활동</Link></li>
          <li><Link to="/culture">문화생활</Link></li>
          <li><Link to="/shop">용품/샵</Link></li>
          <li><Link to="/partner">파트너/팀 찾기</Link></li>
          <li><Link to="/location">지역정보</Link></li>
          <li><Link to="/notices">공지사항</Link></li>
          {/* 여기에 더 많은 상위 카테고리 링크를 추가할 수 있습니다. */}
        </ul>
      </div>
    </div> /* 닫는 태그 확인 */
  );
}

export default Sports;