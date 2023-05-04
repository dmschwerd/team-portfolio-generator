const Manager = require('../lib/Manager');

test('creates an manager object', () => {
    const manager = new Manager('David', 1, 'david@fakemail', 1);

    expect(manager.name).toBe('David');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));

});

test("gets manager's name", () => {
    const manager = new Manager('David', 1, 'david@fakemail', 1);

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets manager's id", () => {
    const manager = new Manager('David', 1, 'david@fakemail', 1);

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("gets manager's email", () => {
    const manager = new Manager('David', 1, 'david@fakemail', 1);

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets manager's role", () => {
    const manager = new Manager('David', 1, 'david@fakemail', 1);

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});