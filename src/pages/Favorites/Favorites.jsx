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
import { auth } from "../../firebase";

const Favorites = () => {
  const favoriteTeachers = useSelector(selectfavoriteTeachers);
  const user = auth.currentUser;
  const favoriteUserTeachers = favoriteTeachers.filter(
    (teacher) => teacher.owner === user.uid,
  );

  return (
    <>
      {favoriteUserTeachers.length > 0 ? (
        <TeachersWrap>
          <ul>
            {favoriteUserTeachers.map((teacher) => (
              <TeacherCard
                key={teacher.id}
                teacher={teacher}
                owner={teacher.owner}
              />
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
