import React, { useState } from "react";
import { Rating, Commentaries, Filter } from "../../components/wrapper";
import usersData from "../../data/reviews.json";
import { statsUsersCalculator } from "../../utils";
import "./HomePage.css";

export const HomePage = () => {
  const statsUsers = statsUsersCalculator(usersData);
  const [usersDataFilter, setUsersDataFilter] = useState(usersData);

  const handleChangeFilter = (selectOption) => {
    if (!parseInt(selectOption)) {
      setUsersDataFilter(usersData);
      return;
    }

    const newFilter = usersData.filter((user) => {
      return user.grade === selectOption;
    });
    setUsersDataFilter(newFilter);
  };

  return (
    <div className="homePage">
      <Rating statsUsers={statsUsers} />
      <Filter
        handleChangeFilter={handleChangeFilter}
        stars={statsUsers.stars}
      />
      <Commentaries usersData={usersDataFilter} statsUsers={statsUsers} />
    </div>
  );
};

HomePage.defaultProps = {};

HomePage.propTypes = {};
