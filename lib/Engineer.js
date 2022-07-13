const Employee = require("./Employee");

class Engineer extends Employee {
    //extending employee class giving it github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;        
    }
    //returning githib
    getGitHub(){
        return this.github;
    }
    //returning the role
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer; 