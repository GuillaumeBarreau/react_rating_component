import React from "react";
import { shallow } from "enzyme";
import { StarIcon } from "./";

describe("StarIcon Component", () => {
  let props;
  beforeEach(() => {
    props = {
      size: 32,
    };
  });

  it("renders without crashing", () => {
    shallow(<StarIcon color={false} size={props.size} />);
  });

  it("Should contain a value #dad7d7 when prop color is false", () => {
    const wrapper = shallow(<StarIcon color={false} size={props.size} />);
    expect(wrapper.html()).toContain("#dad7d7");
  });

  it("Should contain a value #4e8cbe when prop color is true", () => {
    const wrapper = shallow(<StarIcon color={true} size={props.size} />);
    expect(wrapper.html()).toContain("#4e8cbe");
  });

  it("Should contain a size value", () => {
    const wrapper = shallow(<StarIcon color={true} size={props.size} />);
    expect(wrapper.html()).toContain('height="32" width="32"');
  });
});
