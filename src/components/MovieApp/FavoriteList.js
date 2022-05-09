import React, { useState, useContext } from "react";
import TaskContext from "../context/TaskContext";
import Spinner from "../shared/Spinner";
import FavoriteMovie from "./FavoriteMovie";
import Movie from "./Movie";

export default function FavoriteList() {
  const { movieList, isLoading } = useContext(TaskContext);

  const result = movieList;

  if (!isLoading && (!result || result.length === 0)) {
    return <p>Movie Not available</p>;
  }

  return isLoading ? (
    <Spinner />
  ) : (
    <>
      {result.map((movie, pos) => (
        <li className="movie-list-item" key={pos}>
          <FavoriteMovie info={movie} />
        </li>
      ))}
    </>
  );
}
