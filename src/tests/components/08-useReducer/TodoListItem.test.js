import { shallow } from "enzyme";
import React from "react";

import TodoListItem from "../../../components/08-useReducer/TodoListItem";

describe("TodoListItem", () => {
  it("should render the component", () => {
    const wrapper = shallow(
      <TodoListItem
        index={1}
        todo={{ done: false, desc: "test-desc", id: 1 }}
        handleToggle={() => {}}
        handleDelete={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').text().trim()).toBe("2. test-desc")
  });

  it("should call handleToggle with params", () => {
    const handleToggle = jest.fn();

    const wrapper = shallow(
      <TodoListItem
        index={1}
        todo={{ done: false, desc: "test-desc", id: 1 }}
        handleToggle={handleToggle}
        handleDelete={() => {}}
      />
    );

    wrapper.find("p").simulate("click");

    expect(handleToggle).toHaveBeenCalledWith(1);
  });

  it("should call handleDelete with params", () => {
    const handleDelete = jest.fn();

    const wrapper = shallow(
      <TodoListItem
        index={1}
        todo={{ done: false, desc: "test-desc", id: 1 }}
        handleToggle={() => {}}
        handleDelete={handleDelete}
      />
    );

    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(1);
  });
});
