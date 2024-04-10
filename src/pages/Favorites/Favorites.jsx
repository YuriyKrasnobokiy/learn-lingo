import React from "react";
import { useSelector } from "react-redux";
import { selectfavoriteTeachers } from "../../redux/teachers/teachersSelectors";

const Favorites = () => {
  const favoriteTeachers = useSelector(selectfavoriteTeachers);
  return (
    <>
      <ul>
        {favoriteTeachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.name} {teacher.surname}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Favorites;
