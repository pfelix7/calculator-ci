const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateTotal } = require("./calculator");

test("3 items at 10 each cost 30", () => {
  assert.equal(calculateTotal(3, 10), 30);
});

test("zero items cost zero", () => {
  assert.equal(calculateTotal(0, 10), 0);
});
