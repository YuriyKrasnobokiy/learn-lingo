import { MdOutlineWbSunny } from "react-icons/md";
import { MdOutlineNightsStay } from "react-icons/md";
import { Toaster } from "react-hot-toast";
import {
  HeaderNav,
  HeaderWrapper,
  LogoTextStyled,
  LogoWrapperStyled,
  NavLinkStyled,
  StyledHeader,
  ThemeBtn,
} from "../../components/Layout/Layout.styled";
import UkraineIcon from "../../assets/icons/ukraine.svg";
import { UserMenu } from "../UserMenu/UserMenu";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebase";
export const Layout = ({ children, toggleTheme, currentTheme }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Відписка від слухача при розмонтуванні //
    return () => unsubscribe();
  }, []);

  return (
    <>
      <StyledHeader>
        <HeaderWrapper>
          <LogoWrapperStyled>
            <img src={UkraineIcon} alt="ukraine" />
            <LogoTextStyled>LearnLingo</LogoTextStyled>
          </LogoWrapperStyled>
          <HeaderNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
            <NavLinkStyled to="/teachers">Teachers</NavLinkStyled>
            {isAuthenticated && (
              <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
            )}
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
      </StyledHeader>
      <main>{children}</main>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
