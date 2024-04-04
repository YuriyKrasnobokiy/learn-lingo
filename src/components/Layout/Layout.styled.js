import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  max-width: 1184px;
  padding: 20px 64px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoTextStyled = styled.span`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  margin-left: 8px;
  margin-right: 290px;
`;

export const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  padding: 14px 0;
  color: ${(props) => props.theme.colors.textColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  transition: color 0.3s linear;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }

  &.active {
    color: ${(props) => props.theme.colors.secondAccentColor};
  }

  &:not(:last-child) {
    margin-right: 28px;
  }
`;

export const ThemeBtn = styled.button`
  font-size: 24px;
  width: 40px;
  height: 40px;
  justify-content: center;
  background-color: transparent;
  color: ${(props) => props.theme.colors.textColor};
  margin: 0;
`;

// export const AuthBtnsWrap = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const LoginButtonStyled = styled.button`
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 1.25;
//   margin: 0;
//   padding: 14px 16px;
//   background: transparent;
//   color: ${(props) => props.theme.colors.textColor};
//   transition: color 0.3s linear;

//   &:hover {
//     color: ${(props) => props.theme.colors.accentColor};
//   }
// `;

// export const LoginBtnIcon = styled.img`
//   margin-right: 8px;
// `;

// export const RegisterButtonStyled = styled.button`
//   border-radius: 12px;
//   padding: 14px 40px;
//   font-weight: 700;
//   font-size: 16px;
//   line-height: 1.25;
//   margin: 0;
//   color: ${(props) => props.theme.colors.registerBtnColor};
//   background-color: ${(props) => props.theme.colors.registerBtnBgColor};
//   transition: background-color 0.3s linear;

//   &:hover {
//     background-color: ${(props) => props.theme.colors.accentColor};
//   }
// `;
