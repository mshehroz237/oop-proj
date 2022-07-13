//getting all the classes
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
//using inquirer
const inquirer = require('inquirer');
//getting template.js
const pageRender = require('./src/template')
//getting fs to create the html file
const fs = require('fs');


//all the tema memeber will be stored in this array
let teamMembers = []
//When we start the applications, ther should be a a prompt for a user to create a manager
function managerPrompt() {
    //getting the managers name,emloyee id, email and office Number
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
            //creating a new manager
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
            //pushing it to the array
            teamMembers.push(manager)
            //calling the propmpts fucntion
            prompts();
        })
}
function prompts() {
    //give user a list to see if the want to add an intern or enginner or be done
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
            //calling functions based on the user prompt
            if (answers.prompts === 'Add an Intern') {
                intern()
            }
            if (answers.prompts === 'Add an engineer') {
                enginnerQuestion()
            }
            if (answers.prompts === 'Are you done?') {
                //if user selects done then save it into a var and us eit as dta to create the html file
                var genHtml = pageRender(teamMembers);
                fs.writeFile('index.html', genHtml,(err)=>{
                    if(err){
                        throw err;
                    }
                    console.log(teamMembers);
                })
            }
        })

}
//asking enginner quetions
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
            //creating the new enginner 
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
            //pushing the enginner
            teamMembers.push(engineer)
            //calling to show user the prompts
            prompts();

        })
}

function intern() {
    //asking user Intern qustions
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
            //creating a new Intern
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
            //pushing it into teammembers array
            teamMembers.push(intern)
            //calling to show all the prompts
            prompts();
        })
}
//calling the function to show the manager prompts
managerPrompt();

