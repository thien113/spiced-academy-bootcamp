import { add, subtract, multiply, divide } from "./index";
describe("add() tests", () => {
  test("return 5 if called with add(2,3)", () => {
    const testResult = add(2, 3);
    expect(testResult).toBe(5);
  });
  test("return negative value if greater argument", () => {
    const testResult = add(1, -2);
    expect(testResult).toBeLessThan(0);
  });
  test(" return close to 0.3 with add(0.1, 0.2", () => {
    const testResult = add(0.1, 0.2);
    expect(testResult).toBeCloseTo(0.3);
  });
});

describe("substract()", () => {
  test("return 10 if substract(10,5)", () => {
    const testResult = subtract(10, 5);
    expect(testResult).toBe(5);
  });
  test("negative value if second argument is greater than first", () => {
    const testResult = subtract(5, 10);
    expect(testResult).toBeLessThan(0);
  });
});

describe("multiply", () => {
  test("get 8 with multiply(2,4)", () => {
    const testResult = multiply(2, 4);
    expect(testResult).toBe(8);
  });
  test("negative value if a=-1", () => {
    const testResult = multiply(-1, 4);
    expect(testResult).toBeLessThan(0);
  });
  test("negative value if b=-1", () => {
    const testResult = multiply(1, -4);
    expect(testResult).toBeLessThan(0);
  });
  test("negative value if a&b=-1", () => {
    const testResult = multiply(-1, -4);
    expect(testResult).toBeGreaterThan(0);
  });
});

describe("divide()", () => {
  test("return value 3 if (9,3)", () => {
    const testResult = divide(9, 3);
    expect(testResult).toBe(3);
  });
  test("return you cant do this if b=0", () => {
    const testResult = divide(2, 0);
    expect(testResult).toBe("You should not do this!");
  });
});
