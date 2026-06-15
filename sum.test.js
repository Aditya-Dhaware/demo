import sum from "./sum.js";

describe("test for addition", () => {
  test("2 plus 2 is equals to 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  test("sum of negative number gives negative", () => {
    expect(sum(-5, -5)).toBe(-10);
  });
});
