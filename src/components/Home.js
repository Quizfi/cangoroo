import React from "react";
import NavigationBar from "./NavigationBar";
import MainBanner from "./MainBanner";
import Category from "./Category";
import Content from "./Content";
import Footer from "./Footer";
import SportsWidget from "./SportsWidget";
import ContentsBanner from "./ContentsBanner";
import Club from "./Club";
import MiddleBanner from "./MiddleBanner";
import Locationwidget from "./Locationwidget";

function Home() {
  return (
    <div>
      <NavigationBar />
      <Category />
      <MainBanner />
      <SportsWidget />
      <Club />
      <ContentsBanner />
      <MiddleBanner />
      <Locationwidget />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
