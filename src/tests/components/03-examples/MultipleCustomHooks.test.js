import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/multipleCustoHooks";
import { useFetch } from "../../../hooks/useFetch";

jest.mock("../../../hooks/useFetch");

describe("MultipleCustomHooks", () => {
  it("should render the component", () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });

    const wrapper = shallow(<MultipleCustomHooks />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should show the info", () => {
    useFetch.mockReturnValue({
      error: null,
      data: [{ author: "test-author", quote: "test-quote" }],
      loading: false,
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert').exists()).toBe(false);
    expect(wrapper.find('.mb-2').text().trim()).toBe("test-quote");
    expect(wrapper.find('footer').text().trim()).toBe("test-author");
  });


});
