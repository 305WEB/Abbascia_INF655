import React, { useState } from "react";
import Card from "../shared/Card";

// Firebase module getAuth

import { getAuth, updateProfile } from "firebase/auth";
import { Navigate, useNavigate } from "react-router-dom";

// Firebase dB
import { db } from "../../firebase.config";
import { doc, updateDoc } from "firebase/firestore";
import { useRef } from "react/cjs/react.production.min";
// import { async } from "@firebase/util";

export default function Profile() {
  const auth = getAuth();

  const [updateDetails, setUpdateDetails] = useState(false);

  // SPACER
  const [formData, setFormData] = useState({
    // Gets user details (uses firebase methods)
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  });

  const navigate = useNavigate();
  const onLogOut = () => {
    auth.signOut();
    navigate("/");
  };

  const { name, email } = formData;

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        //Update display name in fb
        await updateProfile(auth.currentUser, {
          displayName: name
        });
        //update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  // SPACER
  return (
    <div className="profile">
      <header>
        <p className="pageHeader">My Profile</p>
      </header>
      <Card>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!updateDetails ? "profileName" : "profileNameActive"}
              disabled={!updateDetails}
              value={name}
              onChange={onChange}
            />

            <input
              type="text"
              id="email"
              className={!updateDetails ? "profileEmail" : "profileEmailActive"}
              disabled={!updateDetails}
              value={email}
              onChange={onChange}
            />
          </form>
          <p
            className="updateProfileDetails"
            onClick={() => {
              updateDetails && onSubmit();
              setUpdateDetails((prevState) => !prevState);
            }}
          >
            {updateDetails ? "Done" : "Edit"}
          </p>
        </div>
      </Card>
      <button className="btn" type="logout" onClick={onLogOut}>
        LogOut
      </button>
    </div>
  );
}
