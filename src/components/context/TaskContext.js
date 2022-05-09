import { useState, createContext, useEffect } from "react";

// Firebase
import {
  addDoc,
  doc,
  getDocs,
  orderBy,
  query,
  limit,
  collection,
  updateDoc,
  deleteDoc
} from "firebase/firestore";
import { db } from "../../firebase.config";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Loading GIF imag

  const [isLoading, setIsLoading] = useState(true);

  //Brings in data from DB FIRESTORE
  // const [taskList, setTaskList] = useState([]);

  const [movieList, setMovieList] = useState([]);

  // To edit tasks
  const [taskEdit, setTaskEdit] = useState({
    task: {},
    edit: false
  });

  useEffect(() => {
    fetchMovie();
  }, [movieList]);

  // ----------------------------------- FUNTIONS

  // To Fetch the Task Data
  const fetchMovie = async () => {
    const movieListRef = collection(db, "movieList");

    // FROM FIREBASE EXAMPLE
    // Create a query against the collection.
    // const q = query(citiesRef, where("state", "==", "CA"));

    const q = query(movieListRef, orderBy("title"), limit(10));
    const querySnapshot = await getDocs(q);

    // needed empty array
    const movieList = [];

    // Going through documents
    querySnapshot.forEach((doc) => {
      //-------------
      return movieList.push({
        id: doc.id,
        data: doc.data()
      });
    });

    setMovieList(movieList);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, [movieList]);

  // To add -----------------------------------------------------------------
  const addNextMovie = async (newMovie) => {
    // ADDS NEW RECORD
    const docRef = await addDoc(collection(db, "movieList"), newMovie);
    setMovieList(movieList);
  };

  // To Delete --------------------------------------------------------------

  const deleteMovie = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      //---------------
      await deleteDoc(doc(db, "movieList", id));
      setMovieList(movieList);
    }
  };

  return (
    // all needed functions can be passed globally from here as properties
    <TaskContext.Provider
      value={{
        movieList,
        isLoading,
        deleteMovie,
        addNextMovie
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
