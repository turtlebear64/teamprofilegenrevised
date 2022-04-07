const Engineer = require("../people/Engineers");

test("gets the github", () => {
  const testValue = "Github";
  const e = new Engineer("Nicolas", 1, "ex@ex.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Nicolas", 1, "ex@ex.com", "Github");
  expect(e.getRole()).toBe(testValue);
});

test("gets github username via getgithub()", () => {
  const testValue = "Github";
  const e = new Engineer("Nicolas", 1, "ex@ex.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});