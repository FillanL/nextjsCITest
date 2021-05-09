import "@testing-library/jest-dom";
import { addNum } from "../utils";

describe("util helper test", () => {
  test("add two nums together ", () => {
    const results: number | null = addNum(3, 4);
    expect(results).toBe(7);
  });
  test("only numbers ", () => {
    const results: number | null = addNum("b", "s");
    expect(results).toBe(null);
  });
});
