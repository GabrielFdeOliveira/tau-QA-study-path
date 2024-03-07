// Test suite for mathematical operations

// Test cases

// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

const assert = require("assert");

describe("Mathematical Operations - Test Suite", function () {
  //Time out here is set for the whole test suite
  // this.timeout(100);

  it("Addition of two numbers", function () {
    // Time out here will be considered for this single test case
    // this.timeout(100);
    /* Standard Mocha time out is 2000, so this test case would
    fail in case we set it for longer than that
    */
    // setTimeout(done, 3000);

    let a = 10;
    let b = 10;
    let result = a + b;

    assert.equal(result, 20);
  });
  it("Subtraction of two numbers", function () {
    let a = 10;
    let b = 10;
    let result = a - b;

    assert.equal(result, 0);
  });
  it("Multiplication of two numbers", function () {
    let a = 10;
    let b = 10;
    let result = a * b;

    assert.equal(result, 100);
  });
  it("Division of two numbers", function () {
    let a = 10;
    let b = 10;
    let result = a / b;

    assert.equal(result, 1);
  });
  it("Testing the pending feature");
});
