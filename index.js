const inquirer = require('inquirer');
const Manager = require('./people/Managers');
const Engineer = require('./people/Engineers')
const Intern = require('./people/Interns')
const fs = require('fs');
const generateTeam = require('./generateTeam');


team = [];
const managerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team manager email?',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the team manager office number?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more people'],
        }
    ])
    .then((managerAnswers) => {
    
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('/index.html', generateTeam(team))
        }
    });
};

const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer email?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers Github?',
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more people'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default: 
            writeToFile('/index.html', generateTeam(team))
        }
    })
};

const internQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns education?'
        },
        {
            type: 'list',
            name: 'addMember',
            message: 'What type of team member would you like to add next?',
            choices: ['Engineer', 'Intern', 'I dont want to add any more people'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember){
            case 'Engineer':
                engineerQuestions();
                break;
            case 'Intern':
                internQuestions();
                break;
            default:
                writeToFile('dist/index.html', generateTeam(team))
        }
    })
}

managerQuestions();


function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file has been created and saved')
    });
};

