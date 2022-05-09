import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./components/context/TaskContext";
import HomePage from "./components/pages/HomePage";
import PrivateRoute from "./components/PrivateRoute";
import MovieList from "./components/MovieApp/MovieList";
import FavoritesPage from "./components/pages/FavoritesPage";
import SignInPage from "./components/pages/SignInPage";
import ProfilePage from "./components/pages/ProfilePage";
import SignUpPage from "./components/pages/SignUpPage";

export default function App() {
  return (
    <>
      <TaskProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<PrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/movieList" element={<MovieList />} />
            <Route path="/favoriteList" element={<FavoritesPage />} />
          </Routes>
        </BrowserRouter>
      </TaskProvider>
    </>
  );
}
