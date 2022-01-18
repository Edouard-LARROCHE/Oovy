import React from 'react';
import './CategorieButton.css';

const CategorieButton = ({ genre_id, genre_name, handlefilterFilmByCategorie }) => (
  <b onClick={(e) => handlefilterFilmByCategorie(e, genre_id)} name={genre_id} className="transparent">
    <p>
      <span className="bg"></span>
      <span className="base"></span>
      <span className="text" id={genre_id}>
        {genre_name}
      </span>
    </p>
  </b>
);

export default CategorieButton;
