import { expect, test } from "vitest";

function sum(a: number, b: number) {
  return a + b;
}

test("Test 1+1 = 2", () => {
  expect(sum(1, 1)).toBe(2);
});
