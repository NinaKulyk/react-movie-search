import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesByIdCredits } from "../../API/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const params = useParams();
  const [cast, setCast] = useState([]);

  const BASIC_IMG_URL = "http://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesByIdCredits(params.movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.movieId]);

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Cast</h3>
      <ul className={s.list}>
        {cast.map((item) => (
          <li key={item.id} className={s.castItem}>
            <img
              className={s.castImg}
              src={`${BASIC_IMG_URL}${item.profile_path}`}
              alt={item.name}
            />
            <h3 className={s.castTitle}>{item.name}</h3>
            <p className={s.castText}>({item.character})</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
