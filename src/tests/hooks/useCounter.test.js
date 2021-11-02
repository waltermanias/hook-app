import { renderHook, act } from "@testing-library/react-hooks";

import { useCounter } from "../../hooks/useCounter";

describe("useCounter", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useCounter());
    expect(typeof result.current.increment).toBe("function");
    expect(typeof result.current.decrement).toBe("function");
    expect(typeof result.current.reset).toBe("function");
    expect(result.current.counter).toBe(10);
  });

  it("should return counter with overwritten default value", () => {
    const { result } = renderHook(() => useCounter(11));
    expect(result.current.counter).toBe(11);
  });

  it("should return counter with incremented value", () => {
    const { result } = renderHook(() => useCounter(11));
    act(() => {
      result.current.increment();
    });
    expect(result.current.counter).toBe(12);
  });

  it("should decrement the value", () => {
    const { result } = renderHook(() => useCounter(11));
    act(() => {
      result.current.decrement();
    });
    expect(result.current.counter).toBe(10);
  });

  it("should reset the value", () => {
    const { result } = renderHook(() => useCounter(10));
    act(() => {
      result.current.increment();
      result.current.reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
