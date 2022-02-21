const inquirer = require('inquirer');
const fs = require('fs');

// ----- Table of Contents ----- //

let createReadMe = (username, title, description, installation, useage, command, command2, credit, license) => {
    return `
# Title : ${title}

# Table of Contents

* Description
* Installation
* Useage
* Test
* License

## GitURL:

github.com/${username}

## Description :

${description}

## Installation :

${installation}

## Useage :

${usage}

## Credit :

${credit}

## Test :

Commands needed to run for tests and dependencies.

Dependencies: ${command} , Tests: ${command2}

## License
${license}`;
}


// ----- Questions ----- //

var questions = [
    {
        type: 'input',
        name: 'username',
        message: "What is your GitHub username?",
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the name of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Please write a short description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What does the user need to know about installing the repo?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please input any examples of code that will assist the user with your project.",
    },
    {
        type: 'input',
        name: 'command',
        message: "What command should be used to install dependencies?",
        default: "npm i",
    },
    {
        type: 'input',
        name: 'command2',
        message: "What command should be used to run tests?",
        default: "npm test", 
    },
    {
        type: 'input',
        name: 'credit',
        message: "Who should you credit for contribution to this project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license should your project have?",
        choices: ['Apache 2.0 License', 'Boost Software LIcense 1.0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'The MIT License', 'Mozilla Public License 2.0'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
];

// ----- Provides user interface and the inquiry session flow ----- //

inquirer
    .prompt (questions)
    .then (answers => {

        const { username, title, description, installation, useage, command, command2, credit, license } = answers;

        const template = createReadMe(username, title, description, installation, useage, command, command2, credit, license);

        fs.writeFile('README.md', template,
        (err) => {
            if (err) throw err;
            console.log('Generating README file...');
        });
    })
    .catch(error => {
        console.log(error);
    });