import React from "react";
import { useLocation } from "react-router-dom";



const Banner = () => {
  const location = useLocation();
  return (
    <div>
      <div className={location.pathname === "/" ? "banner-home" : ""}>
        {location.pathname !== "/about" && (
          <h1>Chez vous, 
            <span className="line-break">partout et ailleurs</span></h1>
        )}
      </div>
      <div
        className={location.pathname === "/about" ? "banner-about" : ""}
      ></div>
    </div>
  );
};

export default Banner;