import react from "react";
import React, { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Card from "../shared/Card";

// Firebase Authentication
// https://firebase.google.com/docs/auth/web/start?hl=en&authuser=0#sign_in_existing_users

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // builds json object
      [e.target.id]: e.target.value
    }));
  };

  //
  const { email, password } = formData;

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const auth = getAuth();
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // If user has valid credentials
      if (userCredentials.user) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // SPACER-----------
  return (
    <Card>
      <header>
        <p>Please Sign In</p>
      </header>

      <form onSubmit={onSubmit}>
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

        {/* <Link to="/forgot-password" className="forgotPasswordLink">
          Forgot Password
        </Link> */}

        <div className="signInBar">
          <button className="signInButton">Sign In</button>
        </div>
      </form>

      <Link to="/sign-up" className="registerLink">
        Don't have an account, please Sign Up!
      </Link>
    </Card>
  );
}
