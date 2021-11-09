import { mount } from "enzyme";
import { act } from "@testing-library/react";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";

describe("TodoApp", () => {
  Storage.prototype.setItem = jest.fn(() => {});

  afterEach(() => {
    Storage.prototype.setItem.mockReset();
  });

  it("should render the component", () => {
    const wrapper = mount(<TodoApp />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render the component 2", () => {
    const wrapper = mount(<TodoApp />);

    act(() => {
      wrapper.find("TodoAdd").prop("handleAddTodo")({
        done: false,
        desc: "test-1",
        id: 1,
      });
    });

    expect(wrapper.find("h1").text().trim()).toBe("Todo App (1)");
    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  });
});
