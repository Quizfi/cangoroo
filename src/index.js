import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // 라우터 관련 컴포넌트 추가
import "./index.css";
import Home from "./components/Home";
import Sports from "./pages/Sports";
import Hobbies from "./pages/Hobbies";
import Culture from "./pages/Culture";
import Shop from "./pages/Shop";
import Partner from "./pages/Partner";
import Location from "./pages/Location";
import Notices from "./pages/Notices";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/location" element={<Location />} />
        <Route path="/notices" element={<Notices />} />
        {/* 추가적으로 필요한 라우트 설정 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
