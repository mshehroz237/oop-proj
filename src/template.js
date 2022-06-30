const Employee = require("../lib/Employee")

const generateTemplate = team => {
    const generateManager = manager => {
        return `<div>`
    }
    const generateEngineer = engineer => {
        return `<div>`
    }
    const generateIntern = intern => {
        return `<div>`
    }
 const html = []
 html.push(team.filter(Employee.getRole === 'Manager').map(manager => generateManager(manager)))

 html.push(team.filter(Employee.getRole === 'Engineer').map(Engineer => generateEngineer(Engineer)).join(''))

 html.push(team.filter(Employee.getRole === 'Intern').map(Intern => generateIntern(Intern)).join(''))

 return html.join('')

}

module.exports  = team => {
    return `
    <!DOCTYPE html>





    ${generateTemplate(team)}
    
    `
}