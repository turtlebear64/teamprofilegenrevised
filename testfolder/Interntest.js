const Intern = require("../people/Interns");

test("Sets the school", () => {
  const testValue = "Columbia University";
  const e = new Intern("Nicolas", 1, "ex@ex.com", testValue);
  expect(e.school).toBe(testValue);
});

test("will return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Nicolas", 1, "ex@ex.com", "Columbia University");
  expect(e.getRole()).toBe(testValue);
});

test("Gets the school", () => {
  const testValue = "Columbia University";
  const e = new Intern("Nicolas", 1, "ex@ex.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});