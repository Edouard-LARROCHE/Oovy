import GetTrailer from './GetTrailer';
import './NeedHelp.css';

const url = 'https://image.tmdb.org/t/p/w500/';

const CardFilm = ({ overview, original_title, backdrop_path, poster_path, release_date, id }) => (
  <div className="containerRenderMoovieSyno">
    <div className="containerTitleSyno">
      <h2 className="titleMoovieCard">{original_title}</h2>
      <p className="textMoovieCard">{overview}</p>
      <p className="moovieDate">{release_date}</p>
      <GetTrailer id={id} />
    </div>
    <div className="imgBox">
      <img className="imgMoovieCard" src={url + poster_path} alt={backdrop_path}></img>
    </div>
  </div>
);

export default CardFilm;
