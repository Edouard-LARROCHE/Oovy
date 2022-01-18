import React from 'react';
import { YoutubePlayer } from 'reactjs-media';

const urlYoutube = 'https://www.youtube.com/watch?v=';
const CardTrailer = ({ id, keys, names, size }) => (
  <div className="BoxResponsive">
    <YoutubePlayer className="TrailerResp" src={urlYoutube + keys} width={900} height={450} />
  </div>
);

export default CardTrailer;
