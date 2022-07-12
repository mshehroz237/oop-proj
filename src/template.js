const Manager = require("../lib/Manager")
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')


const generateTemplate = team => {
    const generateManager = Manager => {
        return `<div>
        <h1>Manager <h1>
        <p>Name :  ${Manager.getName()}</p>
        <p>ID : ${Manager.id}</p>
        <p>Email : ${Manager.email}</p>
        <p>Office Number:  ${Manager.getOfficeNumber()}</p>
        </div>`
    }
    const generateEnginner = Engineer => {
        return `<div>
        <h1>Manager <h1>
        <p>Name :  ${Engineer.name}</p>
        <p>ID : ${Engineer.id}</p>
        <p>Email : ${Engineer.email}</p>
        <p>GitHub:  ${Engineer.getGithub()}</p>
        </div>`
    }
    const generateIntern = Intern => {
        return `<div>
        <h1>Manager <h1>
        <p>Name :  ${Intern.getName()}</p>
        <p>ID : ${Intern.id}</p>
        <p>Email : ${Intern.email}</p>
        <p>School:  ${Intern.getSchool()}</p>
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