class Employee {
    //creating an employee class giving it name id and email
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
//return name
    getName() {
        return this.name;
    }
    //reutrns ID
    getId() {
        return this.id;
    }
    //returns Email
    getEmail() {
        return this.email;
    }
    // returns Role
    getRole() {
        return "Employee";
    }
}


module.exports = Employee;