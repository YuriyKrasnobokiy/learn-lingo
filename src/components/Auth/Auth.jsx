import React, { useEffect, useState } from "react";
import {
  AuthBtnsWrap,
  LoginBtnIcon,
  LoginButtonStyled,
  RegisterButtonStyled,
} from "./Auth.Styled";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import { Modal } from "../Modal/Modal";
import LoginIcon from "../../assets/icons/login.svg";
import { LoginForm } from "../LoginForm/LoginForm";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

export const Auth = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);
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

  const openModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
    setIsOpenModal(true);
  };

  const openRegisterForm = () => {
    setIsLoginFormOpen(false);
    setIsOpenModal(true);
  };

  //   <div>
  //   <p>{`Hello ${authUser.email}`}</p>
  //   <button type="button" onClick={userSignOut}>Sign Out</button>
  // </div>

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
        <AuthBtnsWrap>
          <LoginButtonStyled type="button" onClick={openLoginForm}>
            <LoginBtnIcon src={LoginIcon} alt="login arrow" />
            Log In
          </LoginButtonStyled>
          <RegisterButtonStyled type="button" onClick={openRegisterForm}>
            Registration
          </RegisterButtonStyled>

          {isOpenModal && (
            <Modal openModal={openModal}>
              {isLoginFormOpen ? (
                <LoginForm openModal={openModal} />
              ) : (
                <RegisterForm openModal={openModal} />
              )}
            </Modal>
          )}
        </AuthBtnsWrap>
      )}
    </>
  );
};
