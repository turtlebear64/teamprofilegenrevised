const Manager = require("../people/Managers");

test("Sets the office number", () => {
  const testValue = 50;
  const e = new Manager("Nicolas", 1, "ex@ex.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("Should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Nicolas", 1, "ex@ex.com", 50);
  expect(e.getRole()).toBe(testValue);
});

test("Gets the office number", () => {
  const testValue = 50;
  const e = new Manager("Nicolas", 1, "ex@ex.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});