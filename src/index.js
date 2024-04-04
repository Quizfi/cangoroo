import React from "react";
import ReactDOM from "react-dom/client"; // React 18에서 변경된 부분
import "./index.css";
import Home from "./components/Home"; // App 대신 Home 컴포넌트 사용
import reportWebVitals from "./reportWebVitals";

// React 18의 새로운 사용 방식
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);

reportWebVitals();
