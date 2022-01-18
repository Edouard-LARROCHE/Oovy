import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <div className="row1">
        <div className="col1">
          <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg"
              alt="Tmdb Logo"
              width="200px"
              height="30px"
            />
          </a>
        </div>
        <div className="col2">
          <a href="https://fr-fr.facebook.com/" target="_blank" rel="noreferrer">
            <img src="Facebook.png" alt="Facebook Icon" width="50px" height="50px" />
          </a>
          <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noreferrer">
            <img src="Instagram.png" alt="Instagram Icon" width="50px" height="50px" />
          </a>
          <a href="https://twitter.com/?lang=fr" target="_blank" rel="noreferrer">
            <img src="Twitter.png" alt="Twitter Icon" width="50px" height="50px" />
          </a>
        </div>
        <div className="col3">
          <h4>
            <Link to="/AboutUs">À propos de l'équipe</Link>
          </h4>
        </div>
      </div>
      <hr />
      <div className="row2">
        <p className="col-sm">&copy;{new Date().getFullYear()} Oovy France | Tous droits réservés | Mentions légales | Conditions d'utilisation</p>
      </div>
    </div>
  );
};

export default Footer;
