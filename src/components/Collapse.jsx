import React, { useState } from "react";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";


const Collapse = ({ state, defaultState = false }) => {
const [isCollapsed, setIsCollapsed] = useState(defaultState);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="collapse collapse-about collapse-acco">
      <div
        className="collapse-title collapse-title-acco "
        onClick={toggleCollapse}
      >
        <h3>{state.title}</h3>
        <img
          className="arrowUp arrowDown icon-more"
          src={isCollapsed ? arrowUp : arrowDown}
          alt="arrow"
        />
      </div>
      <div className={isCollapsed ? "collapse-desc" : "desc-hide"}>
        {state.equipments === undefined ? (
          <p>{state.description}</p>
        ) : (
          <ul>
            {state.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Collapse;