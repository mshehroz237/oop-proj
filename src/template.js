//requiring all the classes
const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")
const Engineer = require('../lib/Engineer')
const Intern = require('../lib/Intern')

//creating html cards based on the whiuch function gets called
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
    //creating html cards based on the whiuch function gets called
    const generateIntern = intern => {
        return `<div>
        <h1>Intern <h1>
        <p>Name :  ${intern.name}</p>
        <p>ID : ${intern.id}</p>
        <p>Email : ${intern.email}</p>
        <p>Github:  ${intern.github}</p>
        </div>`
    }
    //creating html cards based on the whiuch function gets called
    const generateEngineer = engineer => {
        return `<div>
        <h1>Enginner <h1>
        <p>Name :  ${engineer.name}</p>
        <p>ID : ${engineer.id}</p>
        <p>Email : ${engineer.email}</p>
        <p>School:  ${engineer.school}</p>
        </div>`
    }
    //storing it in html array
 const html = []
 //created a for loop which will iterate throught the team and call the respective fucntions based on the Role
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
 //joing the html
 return html.join('')
}
//exporting it and creating the html file by calling the fucntion in the body
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