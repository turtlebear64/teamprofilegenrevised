const Employees = require ('./Employees');

class Manager extends Employees {
    constructor (name, id , email, officenumber) {
        super (name, id, email);
        this.officenumber = officenumber;
    }
    getRole() {
        return "Managers";
    }
    getOfficeNumber() {
        return this.officenumber;
    }
}
module.exports = Manager;