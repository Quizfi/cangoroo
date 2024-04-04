import React from "react";
import "./NavigationBar.css"; // CSS 파일 import

function NavigationBar() {
  return (
    <header>
      <div className="center-container">
        <div className="logo">
          {/* 로고를 클릭하면 홈으로 이동 */}
          <a href="/">cangoroo</a>
        </div>
        <div className="search-bar">
          {/* 간단한 검색 폼 */}
          <input type="text" placeholder="검색어를 입력하세요" />
          <button type="submit">검색</button>
        </div>
      </div>
      <div className="user-links">
        {/* 사용자 관련 링크 */}
        <a href="/login">로그인</a>
        <a href="/signup">회원가입</a>
        <a href="/mypage">마이페이지</a>
        <a href="/support">고객센터</a>
      </div>
    </header>
  );
}

export default NavigationBar;