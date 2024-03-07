describe("Mocha Hooks", function () {
  before("Execute Before All Tests", function () {
    console.log("This will execute before all tests");
  });

  beforeEach("Execute before each test", function () {
    console.log("This will execute before each test");
  });

  after("Execute after all tests", function () {
    console.log("This will execute after all tests have been finished");
  });

  afterEach("Execute after each test", function () {
    console.log("This will execute after each test");
  });

  it("Serves as a mock test to check the hooks", function () {
    console.log("Mocha - Test for Mocha Hooks");
  });
  it("Serves as a second mock test to check the hooks", function () {
    console.log("Mocha - Second Test for Mocha Hooks");
  });
});
