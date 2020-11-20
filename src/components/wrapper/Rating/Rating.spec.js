import React from "react";
import { shallow, mount } from "enzyme";
import { Rating } from ".";

describe("Rating Component", () => {
  let props;

  beforeEach(() => {
    props = {
      statsUsers: {
        stars: { 1: 0, 2: 1, 3: 2, 4: 3, 5: 0 },
        averageGrade: 42,
        ratings: 53,
        reviews: 77,
      },
    };
  });

  it("renders without crashing", () => {
    shallow(<Rating {...props} />);
  });

  it("Should contain a ratings value", () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.html()).toContain(53);
  });

  it("Should contain a reviews value", () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.html()).toContain(77);
  });

  it("Should contain a averageGrade value", () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.html()).toContain(42);
  });

  it("Should count 4 className rating-star-progress", () => {
    const wrapper = shallow(<Rating {...props} />);
    expect(wrapper.find(".rating-star-progress").length).toBe(5);
  });
});
