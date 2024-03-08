// const chai = require("chai");

/*
  Node.js keeps interpreting the Chai module as ES6 even after 
  I set the type as commonjs in the package.json file. GPT 
  suggested to use dynamic import syntax to asynchronously
  at run time
*/

// Use dynamic import():
import("chai").then((chai) => {
  const expect = chai.expect;
  const should = chai.should();
  const assert = chai.assert;

  let a = 2,
    b = 2;

  //expect
  expect(a).to.be.equal(b, "a and b are not equal");
  //should
  a.should.be.equals(b);
  //assert
  assert.equal(a, b, "a and b are not equal");

  //object/string/boolean
  function myObj() {
    return {
      a: 100,
      b: "Hello",
    };
  }

  (x = new myObj()), (y = new myObj());

  expect(x).to.be.an("object");
  // expect(x).to.be.equals(y, "x and y are not equal");
  expect(x).to.be.deep.equals(y, "x and y are not equal");

  //should
  x.should.be.deep.equals(y, "x and y are not equal");

  //assert
  assert.deepEqual(x, y, "x and y are not equal");

  //chaining expressions

  /* Its always advised to check the target type before comparision to
  avoid unexpected behaviour*/
  expect(x).to.be.an("object").and.to.be.deep.equals(y);
  x.should.be.an("object").and.to.be.deep.equals(y);

  //arrays
  let numbers = [1, 2, 3, 0];
  //expect
  expect(numbers).to.be.an("array").that.includes(3);

  //should
  numbers.should.be.an("array").that.includes(3);

  //assert
  assert.isArray(numbers, " numbers is not an array");
});
