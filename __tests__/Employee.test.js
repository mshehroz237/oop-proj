const Employee = require('../lib/Employee');
//creating a test to check if the employee gets craeted or not.
test('See if employee gets created', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
})
