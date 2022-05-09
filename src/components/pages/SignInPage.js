import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../App.css";
import Navbar from "../Navbar/Navbar";
import FavoriteList from "../MovieApp/FavoriteList";

import MovieList from "../MovieApp/MovieList";
import SignIn from "./SignIn";
export default function SignInPage() {
  return (
    <>
      <Header />
      <Navbar />

      <div className="container">
        <h2 className="card">Please Sing In:</h2>

        <SignIn />

        <br />
      </div>
      <Footer />
    </>
  );
}
