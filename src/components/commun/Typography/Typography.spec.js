import React from "react";
import { shallow } from "enzyme";
import { Typography } from "./";

describe("Typography Component", () => {
  let props;
  beforeEach(() => {
    props = {
      children: "children props value",
      component: "section",
      variant: "variant",
    };
  });

  it("renders without crashing", () => {
    shallow(<Typography>{props.children}</Typography>);
  });

  it("Should contain a value children props value", () => {
    const wrapper = shallow(<Typography>{props.children}</Typography>);
    expect(wrapper.html()).toContain("children props value");
  });

  it("Should contain a element section", () => {
    const wrapper = shallow(
      <Typography component={props.component}>{props.children}</Typography>
    );
    expect(wrapper.html()).toContain("section");
  });

  it("Should contain a value typography--variant", () => {
    const wrapper = shallow(
      <Typography variant={props.variant}>{props.children}</Typography>
    );
    expect(wrapper.html()).toContain("typography--variant");
  });

  it("Should contain a value typography--bold", () => {
    const wrapper = shallow(
      <Typography fontBold={true} variant={props.variant}>
        {props.children}
      </Typography>
    );
    expect(wrapper.html()).toContain("typography--bold");
  });

  it("Should not contain a value typography--bold", () => {
    const wrapper = shallow(
      <Typography fontBold={false} variant={props.variant}>
        {props.children}
      </Typography>
    );
    expect(wrapper.html()).not.toContain("typography--bold");
  });
});
