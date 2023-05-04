class Employee {
    constructor(name = '', id = '', email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return `${this.name} has been added to the roster.`;
    }

    getId() {
        return `${this.name}'s id has been set to ${this.id}.`;
    }

    getEmail() {
        return `${this.name}'s email has been set to ${this.email}.`;
    }

    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;