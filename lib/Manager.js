const Employee = require('./Employee')
class Manager extends Employee{
    //manager alos extends employee class
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        //giving manager an offcie number
        this.office = officeNumber;
        
    }
    // return the role
    getRole(){
        return "Manager"
    }
    // returns the office number
    getOfficeNumber(){
        return this.office;
    }
}

module.exports = Manager;