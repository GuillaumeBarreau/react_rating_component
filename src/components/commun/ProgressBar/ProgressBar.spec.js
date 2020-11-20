import React from "react";
import { shallow } from "enzyme";
import { ProgressBar } from "./ProgressBar";

it("renders without crashing", () => {
  shallow(<ProgressBar />);
});

describe("ProgressBar Component", () => {
  let props;
  beforeEach(() => {
    props = {
      average: 50,
    };
  });

  it("Should contain a value typography-variant", () => {
    const wrapper = shallow(<ProgressBar average={props.average} />);
    expect(wrapper.find(".progressBar-range").prop("style")).toHaveProperty(
      "width",
      "50%"
    );
  });
});
