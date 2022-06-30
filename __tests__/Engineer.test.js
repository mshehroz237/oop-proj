const Engineer = require('../lib/Engineer');

test('checking to see if enginner github returns correctly', ()=>{
    const engineer = new Engineer('newEngine', 1, 'myEngine@email.com', 'myEngineGithub');
    const result = 'myEngineGithub'
    expect(engineer.getGitHub()).toBe(result)
})