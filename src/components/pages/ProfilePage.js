import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.css";
import Navbar from "../Navbar/Navbar";
import FavoriteList from "../MovieApp/FavoriteList";
import MovieList from "../MovieApp/MovieList";
import Profile from "./Profile";
export default function ProfilePage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <Profile />

        <br />
      </div>
      <Footer />
    </>
  );
}
