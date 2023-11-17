import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/Index.css'
import './style/Navigation.css'
import "./style/Logo.css";
import "./style/Header.css";
import "./style/Banner.css";
import "./style/Footer.css";
import "./style/Card.css";
import "./style/Error.css";
import "./style/Slideshow.css";
import "./style/Stars.css";
import "./style/Accomodation.css";
import Root from './ReactRouter/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
