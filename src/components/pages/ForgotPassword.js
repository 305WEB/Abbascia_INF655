import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../shared/Card";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onChange = (e) => setEmail(e.target.value);

  // SPACER

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      toast.success("Email was sent.");

      // SPACER
    } catch (error) {
      toast.error("Could not send reset email");
    }
  };
  return (
    <Card>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Forgot Password</p>
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              className="emailInput"
              placeholder="Email"
              id="email"
              value={email}
              onChange={onChange}
            />
            <Link to="/sign-in" className="forgotPasswordLink">
              Sign In
            </Link>
            <button className="signInButton"> Send Reset Link</button>
          </form>
        </main>
      </div>
    </Card>
  );
}
