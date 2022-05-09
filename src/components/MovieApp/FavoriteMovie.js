import react from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import { useState, useContext, useEffect } from "react"; // HOOKS

import { getAuth } from "firebase/auth"; // GETS USER INFO
import { serverTimestamp } from "firebase/firestore"; // TIMESTAMP
import TaskContext from "../context/TaskContext";

export default function FavoriteMovie(movie) {
  const { deleteMovie } = useContext(TaskContext);

  //----------------
  return (
    <>
      <div className="horizontal-card" key={movie.info.id}>
        <img
          src={movie.info.data.image_url}
          alt={`${movie.info.data.title} Poster`}
          className="poster"
        ></img>

        <div className="horizontal-card-info">
          <h2 className="mov-title">{movie.info.data.title}</h2>
          <span className="card-text">
            <span className="movie-desc"> Release Date: </span>{" "}
            {movie.info.data.release_date}
          </span>
          <p>
            <span className="movie-desc"> Movie Page: </span>{" "}
            {/* {`${movie.info.homepage}`} */}
            {"  "}
            <a href={movie.info.data.movie_page} target="_blank">
              {movie.info.data.movie_page}
            </a>
          </p>
          <p>
            <span className="movie-desc">Rated: </span>
            {movie.info.data.raiting}
          </p>
          {/* <p>
            <span className="movie-desc">Category: </span>{" "}
            {movie.info.data.category}
          </p> */}
          <h5>
            <span className="movie-desc">Overview: </span>
          </h5>
          {movie.info.data.description}
          <hr />
          <button
            className="btn btn-fav"
            onClick={() => {
              deleteMovie(movie.info.id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}
