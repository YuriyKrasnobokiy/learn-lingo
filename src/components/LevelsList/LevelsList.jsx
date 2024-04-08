import React from "react";
import { LevelsListItem, LevelsListStyled } from "./LevelsList.Styled";
import { nanoid } from "nanoid";

export const LevelsList = ({ teacher }) => {
  return (
    <LevelsListStyled>
      {teacher.levels.map((level) => (
        <LevelsListItem key={nanoid()}>#{level}</LevelsListItem>
      ))}
    </LevelsListStyled>
  );
};
