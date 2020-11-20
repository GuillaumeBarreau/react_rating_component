import React from "react";
import { shallow, mount } from "enzyme";
import { Filter } from ".";

describe("Select Component", () => {
  let props;

  beforeEach(() => {
    props = {
      stars: { 1: 0, 2: 1, 3: 2, 4: 3, 5: 0 },
      handleChangeFilter: jest.fn(),
    };
  });

  it("renders without crashing", () => {
    shallow(
      <Filter
        stars={props.stars}
        handleChangeFilter={props.handleChangeFilter}
      />
    );
  });

  // it('Should to habe benn called', () => {
  //   const event = {
  //     preventDefault() { },
  //     target: { value: 'the-value' }
  //   };
  //   const wrapper = shallow(<Filter stars={props.stars} handleChangeFilter={props.handleChangeFilter}/>);
  //   wrapper.find('select').simulate('change', event);
  //   expect(props.handleChangeFilter).toHaveBeenCalled();
  // });
});
