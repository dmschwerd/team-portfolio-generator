const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('David', 1, 'david@fakemail', 'dmschwerd');

    expect(engineer.name).toBe('David');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("gets engineer's name", () => {
    const engineer = new Engineer('David', 1, 'david@fakemail', 'dmschwerd');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('David', 1, 'david@fakemail', 'dmschwerd');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's email", () => {
    const engineer = new Engineer('David', 1, 'david@fakemail', 'dmschwerd');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer's role", () => {
    const engineer = new Engineer('David', 1, 'david@fakemail', 'dmschwerd');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("gets engineer's github", () => {
    const engineer = new Engineer('David', 1, 'david@fakemail', 'dmschwerd');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});