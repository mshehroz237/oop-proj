const Manager = require('../lib/Manager');
//checking if manager gets created or not and also checking if it has a name email and a office number
test('checks to see id manager has all the right properties',() => {
 const manager = new Manager('shehroz',2,'mshehro@gmail.com')
 expect(manager.name).toBe('shehroz');
 expect(manager.id).toBe(2);
 expect(manager.email).toBe('mshehro@gmail.com');
})