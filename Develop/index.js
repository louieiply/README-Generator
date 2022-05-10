// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log(generateMarkdown);
// TODO: Create an array of questions for user input
const questions = [    
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?',
    },
    {
        type: 'input',
        name: 'installInstruct',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usageInfo',
        message: 'What is the usage information?',
    },
    {
        type: 'input',
        name: 'contriGuide',
        message: 'What is the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testIntruct',
        message: 'What are the test intructions?',
    },
    {
        type: 'input',
        name: 'lisbadge',
        message: 'Which license bedge do you want?',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

const results = () => {
    return inquirer.prompt(questions);
}

const generateReadme = ({title,description,installInstruct,usageInfo,contriGuide,testIntruct,lisbadge,username,email}) => {
    const format = 
    `
# ${title}

    
## Description

${description}


## Install Instruction

${installInstruct}

    
## Usage Information

${usageInfo}


## Contribution Guide

${contriGuide}

## Test Instruction

${testIntruct}

## Author Information

Email: ${email}
GitHub Username: ${username}
`;
    return format;
}

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    await fs.writeFileSync(fileName,data);
}

// TODO: Create a function to initialize app
async function init() {
    await results()
    .then((answer1) => { writeToFile("SampleReadme.md",generateReadme(answer1))})
    .then(console.log("Readme file has been successfully implemented."))
    .catch((err) => console.error(err));
    ;
}

// Function call to initialize app
init();
