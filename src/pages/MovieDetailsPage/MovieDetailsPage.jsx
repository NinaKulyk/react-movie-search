import React, { useEffect, useState } from "react";
import s from "./MovieDetailsPage.module.css";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "../../API/api";
import { BounceLoader } from "react-spinners";

const MovieDetailsPage = () => {
  const params = useParams();
  const [moviesById, setMoviesById] = useState(null);

  const BASIC_IMG_URL = "http://image.tmdb.org/t/p/original";

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMoviesById(params.movieId);
        setMoviesById(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [params.movieId]);

  if (!moviesById) {
    return (
      <div className={s.loader}>
        <BounceLoader color="#ffffff" size={100} />
      </div>
    );
  }

  return (
    <div className={s.mainContainer}>
      <h2 className={s.title}>Movie Details</h2>
      <div className={s.container}>
        <img
          className={s.movieImg}
          src={`${BASIC_IMG_URL}${moviesById.backdrop_path}`}
          alt={moviesById.title}
        />
        <div className={s.wrapper}>
          <h3 className={s.movieTitles}>{moviesById.title}</h3>
          <p className={s.description}>
            Release date: {moviesById.release_date}
          </p>
          <p className={s.description}>Rating: {moviesById.vote_average}</p>
        </div>
      </div>
      <div className={s.overview}>
        <h3 className={s.movieTitles}>Overview</h3>
        <p className={s.description}>{moviesById.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
