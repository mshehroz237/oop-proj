const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const pageRender = require('./src/template')
const fs = require('fs');
const Engineer = require('./lib/Engineer');

//When we start the applications, ther should be a a prompt for a user to create a manager
let teamMembers = []
function managerPrompt() {
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
        message: 'What is managers email'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number'
    }
    ])
        .then(answers => {

            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            teamMembers.push(manager)
            prompts();
        })
}
function prompts() {
    inquirer.prompt({
        type: 'list',
        name: 'prompts',
        message: 'Would you like to add anything else?',
        choices: [
            'Add an engineer',
            'Add an Intern',
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
                var genHtml = pageRender(teamMembers);
                fs.writeFile('index.html', genHtml,(err)=>{
                    if(err){
                        throw err;
                    }
                    console.log('file has been created');
                })
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
            var genHtml = pageRender(teamMembers);
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            teamMembers.push(engineer)

            prompts();

        })
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
            prompts();
        })
}

managerPrompt();

