import React from 'react';
import ListeDeroulante from './ListeDeroulanteAnnees';

const Years = (props) => {
  const { films, setFilmsFilteredFinal } = props;

  const handleFilmByYears = (e) => {
    let selectedValue = e.target.value;

    const moviesByYears = films.filter((film) => film.release_date.includes(selectedValue));
    setFilmsFilteredFinal(moviesByYears);
  };

  return (
    <div>
      <ListeDeroulante handleFilmByYears={handleFilmByYears} startYear={1980} endYear={2012} />
    </div>
  );
};

export default Years;
