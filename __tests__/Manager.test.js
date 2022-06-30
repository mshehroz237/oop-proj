const Manager = require('../lib/Manager');

test('checks to see id manager has all the right properties',() => {
 const manager = new Manager('shehroz',2,'mshehro@gmail.com')
 expect(manager.name).toBe('shehroz');
 expect(manager.id).toBe(2);
 expect(manager.email).toBe('mshehro@gmail.com');
})