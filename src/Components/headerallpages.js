import React from 'react';
import './headerallpages.css';
import { Link } from 'react-router-dom';

export default function Headerallpages() {
  return (
    <div>
      <div className="headerlogo">
        <Link to="/homepage">
          <img className="logoheader" src="Oovyblanc2.png" alt="logo" />
        </Link>
      </div>
    </div>
  );
}
