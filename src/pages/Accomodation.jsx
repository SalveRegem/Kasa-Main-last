import React, { useEffect } from "react";
import Header from "../components/Header.jsx";
import Slideshow from "../components/SlideShow";
import { useParams, useNavigate, Outlet } from "react-router-dom";
import logement from "../data/logements";
import Stars from "../components/Stars";
import Collapse from "../components/Collapse.jsx";
import Footer from "../components/Footer.jsx"
import "../style/Accomodation.css";

const Accomodation = () => {
  const { id } = useParams(); // Récupération du paramètre ID de l'URL
  const navigation = useNavigate(); // Utilisation du hook useNavigate pour la navigation
  const data = logement.find((item) => item.id === id); // Recherche des données du logement correspondant à l'ID

  useEffect(() => {
    // Effet de côté pour gérer les cas où l'ID n'est pas valide
    if (!data) {
      navigation("/error"); // Redirection vers la page d'erreur si l'ID n'est pas trouvé
    }
  }, [data, navigation]);

  if (!data) {
    // Si l'ID n'est pas valide, on affiche la page d'erreur
    return <Outlet />; // L'élément Outlet permet d'afficher le contenu des routes enfants
  }

  return (
    <div>
      <Header />
      <div className="slider">
        <Slideshow image={data.pictures} />{" "}
        {/* Rendu du composant Slideshow avec les images des logement */}
      </div>
      <div className="all-info">
        <div className="general-info">
          <div className="info-loc">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
          </div>
          <div className="info-host">
            <p>{data.host.name}</p>
            <img
              src={data.host.picture}
              alt={"Photo de profil de " + data.host.name}
            />{" "}
          </div>
        </div>
        <div className="tags-ratings">
          <ul className="tags">
            {data.tags.map((tag, index) => (
              <button className="tag" key={index}>
                {tag}
              </button>
            ))}
          </ul>
          <Stars />
        </div>
      </div>
      <div className="collapse-container">
        <div className="acco-desc">
          <Collapse
            state={{
              title: "Description",
              description: data.description,
            }}
          />{" "}
          {/* Rendu du Collapse avec la description du logement */}
        </div>
        <div className="acco-equipments">
          <Collapse
            state={{
              title: "Équipements",
              equipments: data.equipments,
            }}
          />{" "}
          {/* Rendu du Collapse avec les équipements du logement */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Accomodation;