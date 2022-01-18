import React, { useState, useEffect } from 'react';
import './Filters.css';
import Headerallpages from '../headerallpages';
import Years from './Years/Years';
import axios from 'axios';
import Categorie from './Categorie';
import MobileNavigation from '../Filters/MobileNavigation';
import Notation from './Rating/Rating';
import FinalFilmsFilters from './FinalFilmsFilters';
import Footer from '../Footer/Footer';

function Filters() {
  const [films, setFilms] = useState([]);
  const [filmsFilteredFinal, setFilmsFilteredFinal] = useState([]);
  const [filmFilteredGenres, setFilmFilteredGenres] = useState(films);

  const [limit, setLimit] = useState(3);

  const movieList = () => {
    axios
      .get('https://api.themoviedb.org/3/list/99?api_key=17fad1db874b80e22fb1f7f67fb6189a')
      .then((response) => response.data)
      .then((data) => {
        setFilms(data.items);
        console.log(films);
      });
  };

  useEffect(() => {
    setLimit();
    movieList();
  });

  return (
    <div>
      <Headerallpages />
      <div className="traitFilter"></div>
      <div>
        <MobileNavigation films={films} setFilmsFilteredFinal={setFilmsFilteredFinal} />
        <Categorie
          films={films}
          setFilmsFilteredFinal={setFilmsFilteredFinal}
          filmFilteredGenres={filmFilteredGenres}
          setFilmFilteredGenres={setFilmFilteredGenres}
        />
      </div>
      <div className="yearsNotationDiv">
        <div className="yearsComponent">
          <Years films={films} setFilmsFilteredFinal={setFilmsFilteredFinal} releaseDate={films.release_date} />
        </div>

        <div className="notationComponent">
          <Notation films={films} setFilmsFilteredFinal={setFilmsFilteredFinal} />
        </div>
      </div>

      <div className="resultats">Resultats</div>

      <div>
        <FinalFilmsFilters
          films={films}
          setFilms={setFilms}
          filmsFilteredFinal={filmsFilteredFinal}
          setFilmsFilteredFinal={setFilmsFilteredFinal}
          limit={limit}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Filters;
