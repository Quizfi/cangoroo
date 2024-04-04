import React from "react";
import NavigationBar from "./NavigationBar";
import MainBanner from "./MainBanner";
import Category from "./Category";
import Content from "./Content";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavigationBar />
      <MainBanner />
      <Category />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
