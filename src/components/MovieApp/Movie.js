import react from "react";
import { Link } from "react-router-dom";
import MovieList from "./MovieList";
import { useState, useContext, useEffect } from "react"; // HOOKS

import { getAuth } from "firebase/auth"; // GETS USER INFO
import { serverTimestamp } from "firebase/firestore"; // TIMESTAMP
import TaskContext from "../context/TaskContext";
import PropTypes from "prop-types";

const Movie = (movie) => {
  // -----AUTH
  const auth = getAuth();
  const user = auth.currentUser; // ----------------------Firebase auth.

  // -----CONTEXT

  const { addNextMovie, updateTask, taskEdit } = useContext(TaskContext);

  const [category, setCategory] = useState("popular");

  // //-----CATEGORY

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  //---- SUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user) {
      const newMovie = {
        //title,
        // description,
        title: movie.info.title,
        // id: movie.info.id,
        id: movie.info.id,

        // category: `${category}`,
        description: movie.info.overview,
        image_url: img_path + movie.info.poster_path,
        movie_page: `${movie_url}${movie.info.id}`,
        raiting: movie.info.vote_average,
        release_date: movie.info.release_date,
        userRef: user.uid, // -----user --access--methods from firebase
        // checked: false,
        timestamp: serverTimestamp()
      };

      addNextMovie(newMovie);
      alert("Movie added to your Favorite List");
    } else {
      alert("Please log in to add Favorite");
    }
  };

  let img_path = "https://image.tmdb.org/t/p/w500";

  const movie_url = "https://www.themoviedb.org/movie/";

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <div className="horizontal-card" key={movie.info.id}> */}
        <div className="horizontal-card">
          <img
            src={img_path + movie.info.poster_path}
            alt={`${movie.info.title} Poster`}
            className="poster"
          ></img>

          <div className="horizontal-card-info">
            <h2 className="mov-title">{movie.info.title}</h2>
            <span className="card-text">
              <span className="movie-desc"> Release Date: </span>{" "}
              {movie.info.release_date}
            </span>
            <p>
              <span className="movie-desc"> Movie Page: </span>{" "}
              {/* {`${movie.info.homepage}`} */}
              {"  "}
              <a href={`${movie_url}${movie.info.id}`} target="_blank">
                {`${movie_url}${movie.info.id}`}
              </a>
            </p>
            <p>
              <span className="movie-desc">Rated: </span>
              {movie.info.vote_average}
            </p>
            <p>
              {/* <span className="movie-desc">Category: </span>{" "}
               */}
            </p>
            <h5>
              <span className="movie-desc">Overview: </span>
            </h5>
            {movie.info.overview}
            {/* ADD TO FAVORITE List */}
            <hr />
            {/* <span className="movie-desc">
              Select Category and Add to Favorites
            </span> */}
            <button className="btn btn-fav">Favorite +</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Movie;

// Movie.propTypes = {
//   // id is string b/c uuidv4 uses --
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   image_url: PropTypes.string,
//   movie_page: PropTypes.string,
//   raiting: PropTypes.string
// };
