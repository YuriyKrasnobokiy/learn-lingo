import React from "react";
import { useSelector } from "react-redux";
import { selectfavoriteTeachers } from "../../redux/teachers/teachersSelectors";
import { TeacherCard } from "../../components/TeacherCard/TeacherCard";
import { TeachersWrap } from "../Teachers/Teachers.styled";
import empty from "../../assets/empty-favorite.svg";
import {
  EmptyFavoriteWrap,
  FavoriteEmptyImg,
  FavoriteEmptyText,
} from "./Favorites.Styled";

const Favorites = () => {
  const favoriteTeachers = useSelector(selectfavoriteTeachers);

  return (
    <>
      {favoriteTeachers.length > 0 ? (
        <TeachersWrap>
          <ul>
            {favoriteTeachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </ul>
        </TeachersWrap>
      ) : (
        <>
          <EmptyFavoriteWrap>
            <FavoriteEmptyImg src={empty} alt="empty" />
            <FavoriteEmptyText>
              Oops! It looks like this section is empty at the moment...
            </FavoriteEmptyText>
          </EmptyFavoriteWrap>
        </>
      )}
    </>
  );
};

export default Favorites;
