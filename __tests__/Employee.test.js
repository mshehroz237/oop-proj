const Employee = require('../lib/Employee');

test('See if employee gets created', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
})

// test name 

//test id