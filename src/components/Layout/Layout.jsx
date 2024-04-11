import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import {
  HeaderNav,
  HeaderWrapper,
  LogoTextStyled,
  LogoWrapperStyled,
  NavLinkStyled,
  ThemeBtn,
} from "../../components/Layout/Layout.styled";
import UkraineIcon from "../../assets/icons/ukraine.svg";
import { UserMenu } from "../UserMenu/UserMenu";

export const Layout = ({ children, toggleTheme, currentTheme }) => {
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
              <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
              {/* {user && <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>} */}
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
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
