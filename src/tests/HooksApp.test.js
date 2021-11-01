import React from "react";
import { HookApp } from "../HookApp";
import { shallow } from "enzyme";

describe("HooksApp", () => {
  test("should match the snapshot", () => {
    const wrapper = shallow(<HookApp />);
    expect(wrapper).toMatchSnapshot();
  });
});
