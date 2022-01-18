import React from 'react';
import './Card.css';

const posterUrl = 'https://image.tmdb.org/t/p/w300/';
const Card = ({ original_title, poster_path, backdrop_path, overview, vote_average, release_date }) => (
  <div className="cardfilm">
    <div className="filmTitle">{original_title}</div>
    <div className="conteneura">
      <img className="imgcontenu" src={posterUrl + poster_path} alt={backdrop_path} />
      <div class="txtcontenu">
        <div className="color">{'NOTE : ' + vote_average + '/10 . MDB'}</div>
        <div className="color1">{'CINEMA RELEASE : ' + release_date}</div>
        <div className="summarize">SUMMARISE :</div>
        <div>{overview}</div>
      </div>
    </div>
  </div>
);

export default Card;
