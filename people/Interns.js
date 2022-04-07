const Employees = require('./Employees');

class Intern extends Employees {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    getRole() {
        return 'Interns';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern