import styled from "styled-components";

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoutBtn = styled.button`
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
