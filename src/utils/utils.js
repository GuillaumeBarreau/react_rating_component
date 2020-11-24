export const statsUsersCalculator = (ratingData) => {
  // .map : On récupére un tableau avec pour contenu toutes les valeurs de l'attribut grade
  const usersGrade = ratingData.map((review) => review.grade);

  const statsUsers = {
    ratings: ratingData.length || 0,
    reviews: ratingData.filter((review) => review.content).length || 0,
    averageGrade:
      Math.round(
        (usersGrade.reduce((acc, val) => acc + val, 0) / usersGrade.length) * 10
      ) / 10 || 0,
    ...contructStarsAttribute(ratingData),
  };

  return statsUsers;
};

const contructStarsAttribute = (ratingData) => {
  return ratingData.reduce(
    (acc, val) => {
      return {
        ...acc,
        [acc.stars[val.grade]]: acc.stars[val.grade]++,
      };
    },
    {
      stars: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      },
    }
  );
};
