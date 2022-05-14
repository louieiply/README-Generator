// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title } = require('process');
const generateMarkdown = require('./utils/generateMarkdown.js');
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
        type: 'list',
        name: 'lisbadge',
        message: 'Which license bedge do you want?',
        choices: ["No License","Apache 2.0 License","BSD 3-Clause License","CC0","Attribution 4.0 International","MIT Lincense", "Eclipse","GNU V3","Mozilla Public License 2.0","The Perl License","Unlicense"],
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


// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
    try{
        await fs.writeFileSync(fileName,data);
    }
    catch{
        console.log("Markdown file successfully created.");
    }
}

// TODO: Create a function to initialize app
async function init() {
    console.clear();
    await results()
    .then((answer1) => { writeToFile("SampleReadme.md",generateMarkdown(answer1))})
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
