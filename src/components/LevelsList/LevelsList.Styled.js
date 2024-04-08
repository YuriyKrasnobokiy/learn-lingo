import styled from "styled-components";

export const LevelsListStyled = styled.ul`
  display: flex;
`;

export const LevelsListItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.14;
  border-radius: 35px;
  padding: 8px 12px;
  border: ${(props) => props.theme.colors.levelsListItemBorder};

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:first-child {
    background-color: ${(props) => props.theme.colors.levelsListItemBGC};
  }
`;
