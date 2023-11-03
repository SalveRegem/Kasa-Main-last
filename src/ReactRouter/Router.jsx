import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import About from "../pages/About.jsx";
import Error from "../pages/Error.jsx";
import Home from "../pages/Home.jsx";
import Accomodation from "../pages/Accomodation.jsx";

const Root = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="*" element={<Navigate to="/error" />} />
          </Route>
          {/* L'élément Outlet permet d'afficher le contenu des routes enfants */}
          <Route path="/error" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Root;