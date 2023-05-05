const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const {writeFile, copyFile} = require('./utils/generate-site');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager's name?",
            validate: managerNameInput => {
                if (managerNameInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's name.");
                return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerRoom',
            message: "What is your team manager's ID number?",
            validate: managerIdInput => {
                if (managerIdInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's ID.");
                return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is your team manager's email?",
            validate: managerEmailInput => {
                if (managerEmailInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's email.");
                return false;
                }
            }
        },
        {
            type: 'number',
            name: 'managerRoom',
            message: "What is your manager's ID?",
            validate: managerRoomInput => {
                if (managerRoomInput) {
                    return true;
                } else {
                    console.log("Please enter your team manager's ID.");
                return false;
                }
            }
        }
    ]);
};

const promptEngineer = teamData => {
    console.log(`
        ==================
        Add a New Engineer
        ==================
    `);

    if (!teamData.members) {
        teamData.members = [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer?',
        },
        {
            type: 'number',
            name: 'engineerId',
            message: 'What is the ID number of the engineer?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the email of the engineer?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the GitHub of the engineer?',
        },
        {
            type: 'confirm',
            name: 'confirmAddEngineer',
            message: 'Would you like to add another engineer to the team?',
            default: true
        }
    ])
    .then(memberData => {
        teamData.members.push(memberData);
        if (memberData.confirmAddEngineer) {
            return promptEngineer(teamData);
        } else {
            return teamData;
        }      
    });
};

const promptIntern = teamData => {
    console.log(`
        ================
        Add a New Intern
        ================
    `);
}

promptManager()
    .then(promptEngineer)
    .then(promptIntern)
    .then(teamData => {
        return generatePage(teamData);
    })