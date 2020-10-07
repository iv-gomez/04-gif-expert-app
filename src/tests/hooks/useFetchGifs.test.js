import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe("useFetchGifs hook", () => {
  test("it should return the initial state", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("one punch"));
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  test("should return an array of img and loading in false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("one punch"));
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
