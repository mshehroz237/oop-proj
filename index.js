//What are we going to do in inquirer
const Manager = require('./lib/Manager')
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require("inquirer")

const pageRender = require('./src/template')
//When we start the applications, ther should be a a prompt for a user to create a manager
let teamMembers = []
inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What is managers name'
},
{

    type: 'input',
    name: 'id',
    message: 'What is your employee id'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your project title'
},
{
    type: 'input',
    name: 'officeNumber',
    message: 'What is your project title'
}

])
.then(answers => {

    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    teamMembers.push(manager)
})

// Do the same thing for engineer and intern


//Once we created all our team members we want to generate an html file based on the ccontetn the user put in

// This is the data we are passing into the file creation
pageRender(teamMembers)