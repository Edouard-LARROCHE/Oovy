import React, { useState, useEffect } from 'react';
import './NeedHelp.css';
import axios from 'axios';
import CardFilm from './CardFilm';

function GetMoovie() {
  const [moovie, setMoovie] = useState([]);

  const RequestAPIMoovie = async () => {
    await axios
      .get('https://api.themoviedb.org/3/list/99?api_key=e68df8fb360e2ffe69d4812e69dd24b0')
      .then((response) => response.data)
      .then((data) => {
        setMoovie(data.items[Math.floor(Math.random() * 92)]);
      });
  };
  useEffect(() => {
    RequestAPIMoovie();
  }, []);

  function refreshPage() {
    window.location.reload();
  }

  return (
    <div className="ContainerBodyNeedHelp">
      <div className="titleOneNeedHelp">
        <h1 data-text="Need Help ?">
          <span>Need Help ?</span>
        </h1>
      </div>
      <div className="mooviebox">
        <CardFilm
          original_title={moovie.original_title}
          poster_path={moovie.poster_path}
          overview={moovie.overview}
          release_date={moovie.release_date}
          id={moovie.id}
        />
      </div>
      <div className="buttonRollingBox">
        <button
          className="buttonRollingMoovie"
          type="button"
          onClick={(e) => {
            refreshPage();
            RequestAPIMoovie();
          }}>
          Pas satisfait ?
        </button>
      </div>
      );
    </div>
  );
}

export default GetMoovie;
