const Intern = require("../lib/Intern");
//checking to see if the Intern gets created or not also checking name school and email
test('checks to see if intern has the right properties',() => {
const intern = new Intern('shehroz','1','mshehroz@gmail.com','Rutgers')
expect(intern.school).toBe('Rutgers');
expect(intern.name).toBe('shehroz');
expect(intern.email).toBe('mshehroz@gmail.com');


});