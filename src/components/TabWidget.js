import React, { useState } from "react";
import SportsWidget from "./SportsWidget";
import HobbiesWidget from "./HobbiesWidget";
import CultureWidget from "./CultureWidget";
import "./TabWidget.css";

function TabWidget() {
  const [activeTab, setActiveTab] = useState("sports");

  return (
    <div className="tab-widget-container">
      <div className="tabs">
        <button
          onClick={() => setActiveTab("sports")}
          className={activeTab === "sports" ? "active" : ""}
        >
          스포츠
        </button>
        <button
          onClick={() => setActiveTab("hobbies")}
          className={activeTab === "hobbies" ? "active" : ""}
        >
          취미
        </button>
        <button
          onClick={() => setActiveTab("culture")}
          className={activeTab === "culture" ? "active" : ""}
        >
          문화
        </button>
      </div>
      <div className="content">
        {activeTab === "sports" && <SportsWidget />}
        {activeTab === "hobbies" && <HobbiesWidget />}
        {activeTab === "culture" && <CultureWidget />}
      </div>
    </div>
  );
}

export default TabWidget;
