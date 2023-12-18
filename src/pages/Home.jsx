import React from "react";
import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import Footer from "../components/Footer.jsx";
import Card from "../components/Card.jsx";
import "../assets/banner/BannerHome.jpg";
import "../style/Collapse.css";
import "../style/Slideshow.css";
import "../style/Banner.css";
import "../style/Card.css";
import "../style/Footer.css";
import "../style/Header.css";
import "../style/Logo.css";
import '../style/Navigation.css'
import "../style/Stars.css";


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