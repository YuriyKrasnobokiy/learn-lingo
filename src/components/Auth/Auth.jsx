import React, { useState } from "react";
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

export const Auth = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openModal = () => {
    setIsOpenModal((prevState) => !prevState);
  };

  const openLoginForm = () => {
    console.log("LoginForm is open");
    setIsLoginFormOpen(true);
    setIsOpenModal(true);
  };

  const openRegisterForm = () => {
    setIsLoginFormOpen(false);
    setIsOpenModal(true);
  };

  return (
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
          {isLoginFormOpen ? <LoginForm /> : <RegisterForm />}
        </Modal>
      )}
    </AuthBtnsWrap>
  );
};
