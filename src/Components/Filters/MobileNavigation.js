import React, { useEffect, useState } from 'react';
import './Categorie.css';
import axios from 'axios';
import CategorieButton from './CategorieButton';
import { RiMenuAddFill } from 'react-icons/ri';
import { RiCloseCircleLine } from 'react-icons/ri';

const CategorieBis = (props) => {
  const { films, setFilmsFilteredFinal } = props;
  const [categories, setCategories] = useState([]);

  const categorieList = () => {
    axios
      .get('https://api.themoviedb.org/3/genre/movie/list?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=fr-FR')
      .then((response) => response.data)
      .then((data) => {
        setCategories(data.genres);
      });
  };

  useEffect(() => {
    categorieList();
  }, []);

  const handlefilterFilmByCategorie = (event, genre_id) => {
    event.preventDefault();
    const moviesByGenre = films.filter((film) => film.genre_ids.includes(genre_id));

    setFilmsFilteredFinal(moviesByGenre);
  };

  const [showCategorie, setShowCategorie] = useState(false);
  const openIcon = <RiMenuAddFill className="openIcon" size="30px" color="white" onClick={() => setShowCategorie(!showCategorie)} />;
  const closeIcon = <RiCloseCircleLine className="closeIcon" size="30px" color="white" onClick={() => setShowCategorie(!showCategorie)} />;

  return (
    <div>
      <div className="showCategorie">
        {showCategorie ? closeIcon : openIcon}
        {showCategorie &&
          categories.map((categorie, index) => (
            <CategorieButton
              key={index}
              handlefilterFilmByCategorie={handlefilterFilmByCategorie}
              genre_id={categorie.id}
              genre_name={categorie.name}
            />
          ))}
      </div>
    </div>
  );
};

export default CategorieBis;
