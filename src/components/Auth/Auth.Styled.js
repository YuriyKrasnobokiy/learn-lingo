import styled from "styled-components";

export const AuthBtnsWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButtonStyled = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
  padding: 14px 16px;
  background: transparent;
  color: ${(props) => props.theme.colors.textColor};
  transition: color 0.3s linear;

  &:hover {
    color: ${(props) => props.theme.colors.accentColor};
  }
`;

export const LoginBtnIcon = styled.img`
  margin-right: 8px;
`;

export const RegisterButtonStyled = styled.button`
  border-radius: 12px;
  padding: 14px 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  margin: 0;
  color: ${(props) => props.theme.colors.registerBtnColor};
  background-color: ${(props) => props.theme.colors.registerBtnBgColor};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${(props) => props.theme.colors.accentColor};
  }
`;
