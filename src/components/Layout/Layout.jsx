import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
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
  ThemeBtn,
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

          <AuthBtnsWrap>
            <ThemeBtn type="button" onClick={toggleTheme}>
              {currentTheme === "dark" ? (
                <MdOutlineNightsStay />
              ) : (
                <MdOutlineWbSunny />
              )}
            </ThemeBtn>
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
