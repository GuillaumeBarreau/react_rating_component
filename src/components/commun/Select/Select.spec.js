import React from "react";
import { shallow, mount } from "enzyme";
import { Select } from ".";

it("renders without crashing", () => {
  shallow(<Select />);
});

describe("Select Component", () => {
  let props;

  beforeEach(() => {
    props = {
      options: ["option01", "option02", "option03"],
    };
  });

  it("Should contain a value option01", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.html()).toContain("option01");
    expect(wrapper.html()).toContain("option02");
    expect(wrapper.html()).toContain("option03");
  });

  it("Should to be Called with a new target value", () => {
    const handleChangeFilter = jest.fn();
    const event = {
      preventDefault() {},
      target: { value: "the-value" },
    };
    const wrapper = shallow(
      <Select handleChangeFilter={handleChangeFilter}>{props.children}</Select>
    );
    wrapper.find("select").simulate("change", event);
    expect(handleChangeFilter).toBeCalledWith("the-value");
  });

  it("Should count 3 elements options", () => {
    const wrapper = shallow(<Select {...props} />);
    expect(wrapper.find("option").length).toBe(4);
  });
});
