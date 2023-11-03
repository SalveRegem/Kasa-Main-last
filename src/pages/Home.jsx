import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
import "../assets/banner/BannerHome.jpg";
import "../style/Banner.css";

const Home = () => {
  return (
    <div className="body-main">
      <Header />
      <Banner />
      <Card />
      <Footer />
    </div>
  );
};

export default Home;