import React from "react";
import Header from "../components/Header.jsx";
import error from "../assets/Error404.png";
import { NavLink } from "react-router-dom";
import "../style/Error.css";

const Error = () => {
  return (
    <div className="error">
      <Header />
      <div className="error-ctn">
        <img src={error} alt="404 error" />
        <h3>Oups! La page que vous demandez n'existe pas.</h3>
      </div>
      <NavLink to={"/"}>
        <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </div>
  );
};

export default Error;