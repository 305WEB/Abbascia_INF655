import react from "react";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Card from "../shared/Card";

// firebse - firestore modules
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile
} from "firebase/auth";

import { db } from "../../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // builds json object
      [e.target.id]: e.target.value
    }));
  };

  // Retutns promise, that's why async

  const onSubmit = async (e) => {
    e.preventDefault();
    //   try {}  catch (error) {}
    try {
      // Get values and send it getAut

      const auth = getAuth();

      // Register user with  createUserWithEmailAndPassword
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // SPACER
      const user = userCredentials.user;
      updateProfile(auth.currentUser, { displayName: name });

      // Copy of formData generated minus password

      const formDataCopy = { ...formData };
      delete formDataCopy.password;
      formDataCopy.timeStamp = serverTimestamp();
      navigate("/");
      alert("Thanks for creating your Profile");

      // Add a new document in collection "users" - Firebase https://firebase.google.com/docs/firestore/manage-data/add-data?hl=en&authuser=0#set_a_document
      await setDoc(doc(db, "users", user.uid), formDataCopy);
    } catch (error) {
      console.log(error);
    }
  };

  const { name, email, password } = formData; //********* */

  // SPACER
  return (
    <Card>
      <header>
        <p>Welcome to the Movie App, Please Create your Profile</p>
      </header>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="nameInput"
          placeholder="Name"
          id="name"
          value={name} //********* */
          onChange={onChange}
        ></input>

        <input
          type="email"
          className="emailInput"
          placeholder="Email"
          id="email"
          value={email} //********* */
          onChange={onChange}
        ></input>

        <div className="passwordInputDiv">
          <input
            type="password"
            className="passwordInput"
            placeholder="Password"
            id="password"
            value={password} // ********8
            onChange={onChange}
          ></input>
        </div>

        <div className="signUpBar">
          <button className="signUpButton">Sign Up</button>
        </div>
      </form>

      <Link to="/sign-in" className="registerLink">
        Already have account, please Sign In!
      </Link>
    </Card>
  );
}
