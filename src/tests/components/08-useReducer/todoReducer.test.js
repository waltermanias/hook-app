import { todoReducer } from "../../../components/08-useReducer/todoReducer";

describe("todoReducer", () => {
  it("should return the default action", () => {
    const result = todoReducer([], "non-existing");
    expect(result).toEqual([]);
  });

  it("should add a new item", () => {
    const result = todoReducer([], { type: "add", payload: { id: "test-id" } });
    expect(result).toEqual([{ id: "test-id" }]);
  });

  it("should delete an item", () => {
    const result = todoReducer([{ id: "test-id" }], {
      type: "delete",
      payload: "test-id",
    });
    expect(result).toEqual([]);
  });

  it("should change status", () => {
    const result = todoReducer([{ id: "test-id", done: false }], {
      type: "toggle",
      payload: "test-id",
    });
    expect(result).toEqual([{ id: "test-id", done: true }]);
  });
});
