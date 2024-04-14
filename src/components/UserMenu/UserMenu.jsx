import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";

import { Auth } from "../Auth/Auth";
import { LogoutBtn, UserMenuStyled } from "./UserMenu.Styled";
import { PiSignOutBold } from "react-icons/pi";
import { auth } from "../../firebase";

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
        <UserMenuStyled>
          <p>{`Hello ${authUser.email}`}</p>
          <LogoutBtn type="button" onClick={userSignOut}>
            <PiSignOutBold />
            Sign Out
          </LogoutBtn>
        </UserMenuStyled>
      ) : (
        <Auth />
      )}
    </>
  );
};
