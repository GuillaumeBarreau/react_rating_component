import React from "react";
import { shallow } from "enzyme";
import { Commentaries } from "./";

describe("Commentaries Component", () => {
  let props;
  beforeEach(() => {
    props = {
      usersData: [
        {
          author: { username: "Pseudo" },
          content: "Ecrire un commentaire",
          date: "2020-10-27T14:40:21.459Z",
          grade: 4,
          id: "123",
          title: "Commentaire",
        },
        {
          author: { username: "Pseudo2" },
          content: "Ecrire un second commentaire",
          date: "2020-10-27T14:40:21.459Z",
          grade: 2,
          id: "321",
          title: "Commentaire2",
        },
      ],
      statsUsers: {
        averageGrade: 3.3,
        ratings: 6,
        reviews: 5,
        stars: { 1: 0, 2: 1, 3: 2, 4: 3, 5: 0 },
      },
    };
  });

  it("renders without crashing", () => {
    shallow(
      <Commentaries usersData={props.usersData} statsUsers={props.statsUsers} />
    );
  });

  it("Should renders five children StarIcon", () => {
    const wrapper = shallow(
      <Commentaries usersData={props.usersData} statsUsers={props.statsUsers} />
    );
    expect(wrapper.find("Commentary")).toHaveLength(2);
  });
});
