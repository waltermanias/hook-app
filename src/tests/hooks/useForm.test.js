import { renderHook, act } from "@testing-library/react-hooks";

import { useForm } from "../../hooks/useForm";

describe("useForm", () => {
  const initialState = { description: "" };

  it("should return the default values", () => {
    const { result } = renderHook(() => useForm(initialState));
    expect(result.current.formValues).toEqual(initialState);
    expect(typeof result.current.handleInputChange).toBe("function");
    expect(typeof result.current.reset).toBe("function");
  });

  it("should update formValues", () => {
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleInputChange({
        target: { name: "description", value: "John Doe" },
      });
    });
    expect(result.current.formValues).toEqual({ description: "John Doe" });
  });

  it("should reset formValues", () => {
    const { result } = renderHook(() => useForm(initialState));

    act(() => {
      result.current.handleInputChange({
        target: { name: "description", value: "John Doe" },
      });
      result.current.reset();
    });
    expect(result.current.formValues).toEqual(initialState);
  });
});
