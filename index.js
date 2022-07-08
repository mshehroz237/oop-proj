//What are we going to do in inquirer
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
// const pageRender = require('./src/template')
const fs = require('fs');
const Engineer = require('./lib/Engineer');

//When we start the applications, ther should be a a prompt for a user to create a manager
let teamMembers = []
function managerPrompt() {
    inquirer.prompt({
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
    )
        .then(answers => {

            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamMembers.push(manager)

        })
}
function prompts() {
    inquirer.prompt({
        type: 'list',
        name: 'prompts',
        message: 'Would you like to add anything else?',
        choices: [
            'Add an Intern',
            'Add an engineer',
            'Are you done?'
        ]
    })
        .then(answers => {
            if (answers.prompts === 'Add an Intern') {
                intern()
            }
            if (answers.prompts === 'Add an engineer') {
                enginnerQuestion()
            }
            if (answers.prompts === 'Are you done?') {
                return;
            }
        })

}
function enginnerQuestion() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is enginner name'
    },
    {

        type: 'input',
        name: 'id',
        message: 'What is engineer id '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is enginner email'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your enginers github'
    }
    ]
    )
        .then(answers => {

            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamMembers.push(Engineer)

        })
        prompts();
}

function intern() {
    inquirer.prompt([{
        type: 'input',
        name: 'name',
        message: 'What is interns name'
    },
    {

        type: 'input',
        name: 'id',
        message: 'What is interns id '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is interns email'
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is interns school'
    }
    ]
    )
        .then(answers => {

            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            teamMembers.push(intern)

        })
        prompts();
}

managerPrompt();

prompts();




//Once we created all our team members we want to generate an html file based on the ccontetn the user put in

// This is the data we are passing into the file creation
// pageRender(teamMembers);