import { MaterialUISwitch } from "../Switch/Switch";
import {
  AuthBtnsWrap,
  HeaderNav,
  HeaderWrapper,
  LoginBtnIcon,
  LoginButtonStyled,
  LogoTextStyled,
  LogoWrapperStyled,
  NavLinkStyled,
  RegisterButtonStyled,
} from "./Layout.styled";
import UkraineIcon from "../../assets/icons/ukraine.svg";
import LoginIcon from "../../assets/icons/login.svg";

const Layout = ({ children, toggleTheme, currentTheme }) => {
  return (
    <>
      <header>
        <HeaderWrapper>
          <LogoWrapperStyled>
            <img src={UkraineIcon} alt="ukraine" />
            <LogoTextStyled>LearnLingo</LogoTextStyled>
          </LogoWrapperStyled>
          <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/teachers">Teachers</NavLinkStyled>
          </HeaderNav>
          <MaterialUISwitch
            onClick={toggleTheme}
            checked={currentTheme === "dark"}
          />
          <AuthBtnsWrap>
            <LoginButtonStyled type="button">
              <LoginBtnIcon src={LoginIcon} alt="login arrow" />
              Log In
            </LoginButtonStyled>
            <RegisterButtonStyled type="button">
              Registration
            </RegisterButtonStyled>
          </AuthBtnsWrap>
        </HeaderWrapper>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
