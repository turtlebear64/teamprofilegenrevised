const Employees = require("./Employees");

class Engineer extends Employees {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getRole() {
        return "Engineers";
    }
    getGithub() {
        return this.github;
    }
}
module.exports = Engineer