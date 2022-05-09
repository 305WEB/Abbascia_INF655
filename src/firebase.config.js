// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh091mOJtXOeqNkmeRhmKoJKicxqwil58",
  authDomain: "task-manager-dbdea.firebaseapp.com",
  projectId: "task-manager-dbdea",
  storageBucket: "task-manager-dbdea.appspot.com",
  messagingSenderId: "71531233020",
  appId: "1:71531233020:web:6ebfab87051c5c5911a179",
  measurementId: "G-STRRQ6K3E6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore();
