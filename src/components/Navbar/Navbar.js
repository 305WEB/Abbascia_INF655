import react from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../assets/svg/HomeIcon.svg";
import { ReactComponent as SearchIcon } from "../assets/svg/SearchIcon.svg";
import { ReactComponent as UserIcon } from "../assets/svg/UserIcon.svg";
import { ReactComponent as KeyIcon } from "../assets/svg/KeyIcon.svg";
import { ReactComponent as TaskListIcon } from "../assets/svg/TaskListIcon.svg";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li onClick={() => navigate("/")} className="navbarListItem ">
            <HomeIcon fill="#fff" width="50px" height="36px" />
            <p>Home</p>
          </li>
          {/* <li
            onClick={() => navigate("/searchMovie")}
            className="navbarListItem"
          >
            <SearchIcon fill="#fff" width="50px" height="36px" />
            <p>Movie Search</p>
          </li> */}
          <li
            onClick={() => navigate("/favoriteList")}
            className="navbarListItem"
          >
            <TaskListIcon fill="#fff" width="50px" height="36px" />
            <p>Favorite List</p>
          </li>
          <li onClick={() => navigate("/profile")} className="navbarListItem">
            <UserIcon fill="#fff" width="50px" height="36px" />
            <p>Profile</p>
          </li>
          <li onClick={() => navigate("/sign-in")} className="navbarListItem">
            <KeyIcon fill="#fff" width="50px" height="36px" />
            <p>Sign In</p>
          </li>
        </ul>
      </nav>
    </div>
  );
}
