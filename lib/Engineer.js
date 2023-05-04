const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '', github = '') {
        super(name, id, email);
        
        this.github = github;
    }

    getGithub() {
        return `${this.name}'s github has been set to ${this.github}.`;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;