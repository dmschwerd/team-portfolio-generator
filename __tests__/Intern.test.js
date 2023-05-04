const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('David', 1, 'david@fakemail', 'ASU');

    expect(intern.name).toBe('David');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test("gets intern's name", () => {
    const intern = new Intern('David', 1, 'david@fakemail', 'ASU');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets intern's id", () => {
    const intern = new Intern('David', 1, 'david@fakemail', 'ASU');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("gets intern's email", () => {
    const intern = new Intern('David', 1, 'david@fakemail', 'ASU');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets intern's role", () => {
    const intern = new Intern('David', 1, 'david@fakemail', 'ASU');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("gets intern's school", () => {
    const intern = new Intern('David', 1, 'david@fakemail', 'ASU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});