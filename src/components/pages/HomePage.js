import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.css";
import Navbar from "../Navbar/Navbar";
import FavoriteList from "../MovieApp/FavoriteList";
import MovieList from "../MovieApp/MovieList";
export default function HomePage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <br />

        <MovieList />

        <h2 className="card">Favorite Movies List:</h2>

        <FavoriteList />

        <br />
      </div>
      <Footer />
    </>
  );
}
