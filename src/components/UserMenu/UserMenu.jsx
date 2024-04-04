import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { Auth } from "../Auth/Auth";

export const UserMenu = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => console.log("Successfully signed out"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      {authUser ? (
        <div>
          <p>{`Hello ${authUser.email}`}</p>
          <button type="button" onClick={userSignOut}>
            Sign Out
          </button>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};
