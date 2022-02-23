const inquirer = require('inquirer');
const fs = require('fs');

// ----- Table of Contents ----- //

let createReadMe = (title, username, email, description, installation, useage, command, command2, credit, license) => {
    return `
# Title : ${title}

Table of Contents
=================

* [Description](#description)
* [Installation](#installation)
* [Useage](#useage)
* [Dependencies](#command)
* [Test](#command2)
* [License](#license)

## GitURL:

github.com/${username}

## Email Address:

${email}

## Description :

${description}

## Installation :

${installation}

## Useage :

${useage}

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
        message: '(1) Enter your GitHub username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'email',
      message: '(2) Enter your email address (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your email address!');
          return false;
        }
      }
  },
    {
        type: 'input',
        name: 'title',
        message: '(3) Enter the name of your project (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please enter your project name!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '(4) Please enter a short description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: '(5) What does the user need to know about installing the repo? (Required)',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter any project installation instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: '(6) Explain how to use the site or application once installed. (Required)',
        validate: useageInput => {
          if (useageInput) {
            return true;
          } else {
            console.log('Please enter an overview of how to use the application!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'command',
        message: '(7) Enter what commands should be used to install dependencies? (Required)',
        default: "npm i", 
        validate: commandInput => {
        if (commandInput) {
            return true;
          } else {
            console.log('Please enter a command to insall dependencies!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'command2',
        message: "(8) What command should be used to run tests?",
        default: "npm test",
        validate: command2Input => {
          if (command2Input) {
            return true;
          } else {
            console.log('Please enter command to run tests!');
            return false;
          }
        } 
    },
    {
        type: 'checkbox',
        name: 'credit',
        message: '(9) Select who should get credit for contribution to this project? (Check all that apply)',
        choices: ['Google', 'YouTube', 'Coworker', 'Class Mate', 'Tutor', 'Other'],
        validate: creditInput => {
          if (creditInput) {
            return true;
          } else {
            console.log('Please select contributors to the project!');
            return false;
          }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: '(10) What type of license applies your project? (Check all that apply)',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'The MIT License', 'Mozilla Public License 2.0'],
    },
];

// ----- Provides user interface and the inquiry session flow ----- //

inquirer
    .prompt (questions)
    .then (answers => {

        const { title, username, email, description, installation, useage, command, command2, credit, license } = answers;

        const template = createReadMe(title, username, email, description, installation, useage, command, command2, credit, license);

        // --- Function to write README file --- //
        fs.writeFile('README.md', template,
        (err) => {
            if (err) throw err;
            console.log('Generating README file...');
        });
    })
    .catch(error => {
        console.log(error);
    });