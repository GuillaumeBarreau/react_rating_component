export const statsUsersCalculator = (ratingData) => {
  // .map : On récupére un tableau avec pour contenu toutes les valeurs de l'attribut grade
  const usersGrade = ratingData.map((review) => review.grade);

  const statsUsers = {
    ratings: ratingData.length || 0,
    reviews: ratingData.filter((review) => review.content).length || 0,
    averageGrade:
      Number(
        (
          usersGrade.reduce((acc, val) => acc + val, 0) / usersGrade.length
        ).toFixed(1)
      ) || 0,
    stars: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  };

  // const getCountStars = (arr) => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
  // const {stars} = statsUsers
  // statsUsers.stars = {...stars, ...getCountStars(usersGrade)}

  // .forEach : A chaque itération on incrémente +1 à la key [star] dans notre conteur de star dans l'objet {statsUsers.stars}
  usersGrade.forEach((star) => (statsUsers.stars[star] += 1));

  return statsUsers;
};
