// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of you project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the contributing guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the testing guidelines.',
    },
    {
        type: 'input',
        name: 'Questions',
        message: '',
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache", "None"]
    }
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        fs.writeFileSync('testReadMe.md', generateMarkdown(answers))
    });
}

// Function call to initialize app
init();
