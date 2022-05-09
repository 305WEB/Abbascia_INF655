import react from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";
import Header from "../pages/Header";
import Navbar from "../Navbar/Navbar";
import Footer from "../pages/Footer";

const API_key = "&api_key=930d005e225f22ad2d72eba7084db91b";

const base_url = "https://api.themoviedb.org/3";

let search_API =
  base_url + "/search/movie?api_key=930d005e225f22ad2d72eba7084db91b&query=";

// DEFAULT URL

let url =
  base_url +
  "/discover/movie?with_genres=18&primary_release_year=2022" +
  API_key;

let categories_All = ["Popular", "Theatre", "Kids", "Drama", "Comedy"];

export default function MovieList() {
  //-------
  const [movieData, setMovieData] = useState([]);
  const [url_set, setUrl] = useState(url);
  const [searchTerm, setSearchTerm] = useState("");

  const [category, setCategory] = useState("popular");

  //---------

  // useEffect(() => {
  //   fetch(url_set)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data.results);

  //       setMovieData(data.results);
  //     });
  // }, [url_set]);

  //---------

  // let newCategory = JSON.stringify(category);

  //------------

  useEffect(() => {
    fetchMovie();

    console.log(category);
  }, [url_set]);

  // ----------------------------------- FUNTIONS

  // To Fetch the Task Data
  const fetchMovie = async () => {
    const response = await fetch(url_set);
    const data = await response.json();
    setMovieData(data.results);
  };

  //-------------

  // const btn = document.getElementsByClassName("movies-nav");

  // btn.addEventListener("click", function onClick() {
  //   btn.style.backgroundColor = "white";
  //   // btn.style.color = "white";
  // });

  //--------------------

  let Moviecategory = "";
  let back_col = "";

  const catPopular = document.querySelector(
    "div.container nav ul li.movies-nav.Popular"
  );
  const catTheatre = document.querySelector(
    "div.container nav ul li.movies-nav.Theatre"
  );

  const catKids = document.querySelector(
    "div.container nav ul li.movies-nav.Kids"
  );

  const catDrama = document.querySelector(
    "div.container nav ul li.movies-nav.Drama"
  );
  const catComedy = document.querySelector(
    "div.container nav ul li.movies-nav.Comedy"
  );

  const getData = (movieType) => {
    if (movieType === "Popular") {
      url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
      Moviecategory = "Popular";
      setCategory("Popular");

      catPopular.classList.add("whiteBack");
      catTheatre.classList.remove("whiteBack");
      catKids.classList.remove("whiteBack");
      catDrama.classList.remove("whiteBack");
      catComedy.classList.remove("whiteBack");
    }
    if (movieType === "Theatre") {
      url =
        base_url +
        "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2022-01-01" +
        API_key;
      Moviecategory = "Theatre";
      setCategory("Theatre");
      // const selected = document.querySelector(
      //   "div.container nav ul li.movies-nav.Theatre"
      // );
      // // selected.style.backgroundColor = "white";
      // selected.classList.add("whiteBack");

      catPopular.classList.remove("whiteBack");
      catTheatre.classList.add("whiteBack");
      catKids.classList.remove("whiteBack");
      catDrama.classList.remove("whiteBack");
      catComedy.classList.remove("whiteBack");
    }
    if (movieType === "Kids") {
      setCategory("Kids");
      url =
        base_url +
        "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" +
        API_key;
      Moviecategory = "Kids";

      catPopular.classList.remove("whiteBack");
      catTheatre.classList.remove("whiteBack");
      catKids.classList.add("whiteBack");
      catDrama.classList.remove("whiteBack");
      catComedy.classList.remove("whiteBack");
    }
    if (movieType === "Drama") {
      url =
        base_url +
        "/discover/movie?with_genres=18&primary_release_year=2022" +
        API_key;
      Moviecategory = "Drama";
      setCategory("Drama");

      catPopular.classList.remove("whiteBack");
      catTheatre.classList.remove("whiteBack");
      catKids.classList.remove("whiteBack");
      catDrama.classList.add("whiteBack");
      catComedy.classList.remove("whiteBack");
    }
    if (movieType === "Comedy") {
      url =
        base_url +
        "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" +
        API_key;
      Moviecategory = "Comedy";
      setCategory("Comedy");

      catPopular.classList.remove("whiteBack");
      catTheatre.classList.remove("whiteBack");
      catKids.classList.remove("whiteBack");
      catDrama.classList.remove("whiteBack");
      catComedy.classList.add("whiteBack");
    }

    setUrl(url);
  };

  //------SUBMIT

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      const fetchMovieSearch = async () => {
        const response = await fetch(search_API + searchTerm);
        const data = await response.json();
        setMovieData(data.results);
      };

      fetchMovieSearch();

      setSearchTerm("");
    }
  };

  //----ONCHANGE

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="container">
        <nav>
          <ul>
            {categories_All.map((value, pos) => {
              return (
                <li className={`movies-nav ${value}`} key={pos}>
                  <a
                    href="#"
                    key={pos}
                    name={value}
                    onClick={(e) => {
                      getData(e.target.name);
                    }}
                  >
                    {value}
                  </a>
                </li>
              );
            })}
            <li className="movies-nav search">
              <form onSubmit={handleOnSubmit}>
                <input
                  className="search"
                  type="search"
                  placeholder="Search Movie..."
                  value={searchTerm}
                  onChange={handleOnChange}
                />
              </form>
            </li>
          </ul>
        </nav>

        <div className="container">
          {movieData.length === 0 ? (
            <p className="not-found">Movie Not available</p>
          ) : (
            movieData.map((res, pos) => {
              //---------
              return (
                //----
                <li className="movie-list-item" key={pos}>
                  <Movie info={res} />
                </li>
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
