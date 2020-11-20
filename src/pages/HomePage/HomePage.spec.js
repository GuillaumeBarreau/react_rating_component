import React from "react";
import { shallow } from "enzyme";
import { HomePage } from ".";

describe("HomePage Component", () => {
  let props;
  beforeEach(() => {
    props = {};
  });

  it("renders without crashing", () => {
    shallow(<HomePage />);
  });

  it("Should contain one Filter component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find("Filter")).toHaveLength(1);
  });

  it("Should contain one Rating component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find("Rating")).toHaveLength(1);
  });

  it("Should contain one Commentaries component", () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.find("Commentaries")).toHaveLength(1);
  });
});
