import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardTrailer from './CardTrailer';

export default function GetTrailer({ id, keys }) {
  const [trailer, setTrailer] = useState([]);
  const [showTrailer, setShowTrailer] = useState(true);
  const trailerAppears = () => setShowTrailer(!showTrailer);

  const RequestAPITrailer = async () => {
    await axios
      .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=e68df8fb360e2ffe69d4812e69dd24b0&language=en-US`)
      .then((response) => response.data)
      .then((data) => {
        console.log(data.results[0]);
        setTrailer(data.results[0]);
      });
  };
  useEffect(() => {
    RequestAPITrailer();
  });

  return (
    <div className="buttonAndTrailer">
      <div className="boxButton">
        <button
          className="buttonRollingMoovie"
          type="button"
          onClick={(e) => {
            RequestAPITrailer();
            trailerAppears();
          }}>
          Watch Trailer !
        </button>
      </div>
      <div className="boxTrailer" style={{ display: showTrailer ? 'none' : 'block' }}>
        <CardTrailer keys={trailer.key} names={trailer.name} size={trailer.size} id={trailer.id} />
      </div>
    </div>
  );
}
