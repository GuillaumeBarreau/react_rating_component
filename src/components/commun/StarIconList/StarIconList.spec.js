import React from "react";
import { shallow } from "enzyme";
import { StarIconList } from "../StarIconList";

describe("StarIconList Component", () => {
  let props;
  beforeEach(() => {
    props = {
      stars: {
        1: 0,
        2: 1,
        3: 5,
        4: 4,
        5: 3,
      },
      average: 2,
      size: 32,
    };
  });

  it("renders without crashing", () => {
    shallow(
      <StarIconList
        stars={props.stars}
        average={props.average}
        size={props.size}
      />
    );
  });

  it("Should renders five children StarIcon", () => {
    const wrapper = shallow(
      <StarIconList
        stars={props.stars}
        average={props.average}
        size={props.size}
      ></StarIconList>
    );
    expect(wrapper.find("StarIcon")).toHaveLength(5);
  });

  it("Should contain a value size", () => {
    const wrapper = shallow(
      <StarIconList
        stars={props.stars}
        average={props.average}
        size={props.size}
      ></StarIconList>
    );
    // expect(wrapper.find('StarIcon')[0].toContain("banana");
  });
});
