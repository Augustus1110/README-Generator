// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Creates an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
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
        name: 'collaborators',
        message: 'Please enter collaborator information.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the testing guidelines.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {   type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["MIT", "Apache", "None"]
    }
    
];

// Creates a function to write README file
function writeToFile(fileName, data) {}

// Creates a function to initialize the app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers)
        fs.writeFileSync('testReadMe.md', generateMarkdown(answers))
    });
}

// Function call to initialize the app
init();
