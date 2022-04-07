const Employee = require("../people/Employees");

describe("Employee", () => {
    it("Sets Employee attribute", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    it("Sets name", () => {
        const name = "Nick";
        const e = new Employee(name);
        expect(e.name).toBe(name);
    });

    it("Sets ID", () => {
        const testValue = 100;
        const e = new Employee("Nicolas", testValue);
        expect(e.id).toBe(testValue);
    });

    it("Sets email", () => {
        const testValue = "ex@ex.com";
        const e = new Employee("Nicolas", 1, testValue);
        expect(e.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const testValue = "Nick";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = 100;
            const e = new Employee("Nicolas", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Gets Email()", () => {
            const testValue = "ex@ex.com";
            const e = new Employee("Nicolas", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const testValue = "Employee";
            const e = new Employee("Nick", 1, "ex@ex.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});