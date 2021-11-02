const { renderHook } = require("@testing-library/react-hooks");
const { useFetch } = require("../../hooks/useFetch");

const unmockedFetch = global.fetch;

describe("useFetch", () => {
  beforeEach(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () =>
          Promise.resolve([
            {
              quote_id: 1,
              quote: "I am not in danger, Skyler. I am the danger!",
              author: "Walter White",
              series: "Breaking Bad",
            },
          ]),
      });
  });

  afterEach(() => {
    global.fetch = unmockedFetch;
  });

  it("should return data", () => {
    const { result } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );
    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);
    expect(result.current.error).toBeNull();
  });

  it("should return fetched data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );

    await waitForNextUpdate({ timeout: 3000 });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(result.current.data).toEqual([
      {
        quote_id: 1,
        quote: "I am not in danger, Skyler. I am the danger!",
        author: "Walter White",
        series: "Breaking Bad",
      },
    ]);
  });

  it("should return error", async () => {
    global.fetch = () =>
      Promise.resolve({
        json: () => Promise.reject("Some error"),
      });

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch("https://www.breakingbadapi.com/api/quotes/1")
    );

    await waitForNextUpdate({ timeout: 3000 });

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe("Some error");
    expect(result.current.data).toBeNull();
  });
});
