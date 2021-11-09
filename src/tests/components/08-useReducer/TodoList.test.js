import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";

describe("TodoList", () => {
  it("should render the component", () => {
    const wrapper = shallow(
      <TodoList
        todos={[
          { id: 1, done: false, desc: "test-desc" },
          { id: 2, done: true, desc: "test-desc-2" },
        ]}
        handleDelete={() => {}}
        handleToggle={() => {}}
      />
    );

    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("TodoListItem").length).toBe(2);

    expect(wrapper.find("TodoListItem").at(0).prop("handleDelete")).toEqual(
      expect.any(Function)
    );
  });
});
