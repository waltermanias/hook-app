import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";
import { shallow } from "enzyme";
describe("TodoAdd", () => {
  it("should render the component", () => {
    const wrapper = shallow(<TodoAdd handleAddTodo={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should not call handleAddTodo", () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    wrapper.find("button").simulate("click");

    expect(handleAddTodo).not.toHaveBeenCalled();
  });

  it("should call handleAddTodo", () => {
    const handleAddTodo = jest.fn();
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    wrapper.find("input").simulate("change", {
      target: { value: "My Description", name: "description" },
    });

    wrapper.find("form").simulate("submit", { preventDefault: () => {} });

    expect(handleAddTodo).toHaveBeenCalledWith({
      desc: "My Description",
      done: false,
      id: expect.any(Number),
    });

    expect(wrapper.find("input").prop('value')).toBe("");
  });
});
