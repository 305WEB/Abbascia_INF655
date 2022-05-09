import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.css";
import Navbar from "../Navbar/Navbar";
import FavoriteList from "../MovieApp/FavoriteList";
import MovieList from "../MovieApp/MovieList";
import Profile from "./Profile";
import SignUp from "./SignUp";
export default function SignUpPage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <SignUp />

        <br />
      </div>
      <Footer />
    </>
  );
}
