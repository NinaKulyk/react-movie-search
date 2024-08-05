import { NavLink, useLocation } from "react-router-dom";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies, basicPath }) => {
  const BASIC_IMG_URL = "http://image.tmdb.org/t/p/original";

  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <NavLink
            to={`${basicPath}${movie.id}`}
            state={location}
            className={s.link}
          >
            <img
              className={s.img}
              src={`${BASIC_IMG_URL}${movie.poster_path}`}
              alt={movie.title}
            />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
