import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import {
  // AuthBtnsWrap,
  HeaderNav,
  HeaderWrapper,
  // LoginBtnIcon,
  // LoginButtonStyled,
  LogoTextStyled,
  LogoWrapperStyled,
  NavLinkStyled,
  // RegisterButtonStyled,
  ThemeBtn,
} from "./Layout.styled";
import UkraineIcon from "../../assets/icons/ukraine.svg";
import { Auth } from "../Auth/Auth";
import { UserMenu } from "../UserMenu/UserMenu";
// import LoginIcon from "../../assets/icons/login.svg";
// import { useState } from "react";
// import { Modal } from "../Modal/Modal";
// import { RegisterForm } from "../RegisterForm/RegisterForm";

export const Layout = ({ children, toggleTheme, currentTheme }) => {
  // const [isOpenModal, setIsOpenModal] = useState(false);

  // const openModal = () => {
  //   setIsOpenModal((prevState) => !prevState);
  // };

  return (
    <>
      <header>
        <HeaderWrapper>
          <HeaderNav>
            <LogoWrapperStyled>
              <img src={UkraineIcon} alt="ukraine" />
            </LogoWrapperStyled>
            <div>
              <LogoTextStyled>LearnLingo</LogoTextStyled>

              <NavLinkStyled to="/">Home</NavLinkStyled>
              <NavLinkStyled to="/teachers">Teachers</NavLinkStyled>
            </div>
          </HeaderNav>

          <ThemeBtn type="button" onClick={toggleTheme}>
            {currentTheme === "dark" ? (
              <MdOutlineNightsStay />
            ) : (
              <MdOutlineWbSunny />
            )}
          </ThemeBtn>
          <UserMenu />
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};
