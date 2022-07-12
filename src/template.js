const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


const generateTemplate = team => {
    const generateManager = manager => {
        return `<div>
        <h1>Manager <h1>
        <p>Name :  ${manager.getName()}</p>
        <p>ID : ${manager.id}</p>
        <p>Email : ${manager.email}</p>
        <p>Office Number:  ${manager.getOfficeNumber()}</p>
        </div>`
    }
    const generateEngineer = engineer => {
        return `<div>
        <h1>Enginner <h1>
        <p>Name :  ${engineer.name}</p>
        <p>ID : ${engineer.id}</p>
        <p>Email : ${engineer.email}</p>
        <p>GitHub:  ${engineer.getGithub()}</p>
        </div>`
    }
    const generateIntern = intern => {
        return `<div>
        <h1>Intern <h1>
        <p>Name :  ${intern.getName()}</p>
        <p>ID : ${intern.id}</p>
        <p>Email : ${intern.email}</p>
        <p>School:  ${intern.getSchool()}</p>
        </div>`
    }
 const html = []
 for(var i = 0 ; i < team.length ; i ++){
     if(team[i].getRole() === 'Manager'){
    html.push(generateManager(team[i]))
    }
    if(team[i].getRole() === 'Engineer'){
        html.push(generateIntern(team[i]))
    };
    if(team[i].getRole() === 'Intern'){
        html.push(generateEngineer(team[i]))
    }
 }
 return html.join('')
}
 module.exports  = team => {
     return `
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
     ${generateTemplate(team)}
     </body>
     </html> 
     `
 }