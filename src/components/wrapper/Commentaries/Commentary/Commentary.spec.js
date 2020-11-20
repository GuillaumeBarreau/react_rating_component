import React from "react";
import { shallow } from "enzyme";
import { Commentary } from ".";

describe("Commentary Component", () => {
  let props;
  beforeEach(() => {
    props = {
      user: {
        author: {
          username: "Pseudo",
        },
        content: "commentaire",
        date: "2020-10-27T14:40:21.459Z",
        grade: 4,
        id: "1231LKSANCLKAC",
        title: "CommentaireTitle",
      },
      stars: {
        1: 0,
        2: 1,
        3: 2,
        4: 3,
        5: 0,
      },
    };
  });

  it("renders without crashing", () => {
    shallow(<Commentary user={props.user} stars={props.stars} />);
  });

  it("Should contain a value Pseudo", () => {
    const wrapper = shallow(
      <Commentary user={props.user} stars={props.stars} />
    );
    expect(wrapper.html()).toContain("Pseudo");
  });

  it("Should contain a value commentaire", () => {
    const wrapper = shallow(
      <Commentary user={props.user} stars={props.stars} />
    );
    expect(wrapper.html()).toContain("commentaire");
  });

  it("Should contain a value CommentaireTitle", () => {
    const wrapper = shallow(
      <Commentary user={props.user} stars={props.stars} />
    );
    expect(wrapper.html()).toContain("CommentaireTitle");
  });

  it("Should contain a value #4e8cbe when prop color is true", () => {
    const wrapper = shallow(
      <Commentary user={props.user} stars={props.stars} />
    );
    expect(wrapper.html()).toContain("#4e8cbe");
  });
});
