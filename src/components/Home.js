import React from "react";
import NavigationBar from "./NavigationBar";
import MainBanner from "./MainBanner";
import Category from "./Category";
import Content from "./Content";
import Footer from "./Footer";
import ContentsBanner from "./ContentsBanner";
import Club from "./Club";
import MiddleBanner from "./MiddleBanner";
import Locationwidget from "./Locationwidget";
import Partner from "./Partner";
import TabWidget from "./TabWidget"; // TabWidget 컴포넌트를 임포트

function Home() {
  return (
    <div>
      <NavigationBar />
      <Category />
      <MainBanner />
      <TabWidget />
      <Club />
      <Partner />
      <ContentsBanner />
      <MiddleBanner />
      <Locationwidget />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
