const inquirer = require('inquirer');
const fs = require('fs');

// ----- Table of Contents ----- //

let createReadMe = (username, email, description, installation, dependencies, useage, test, credit, license) => {
    return `

[![GitHub license](https://img.shields.io/github/license/Houst29476/readme-generator)](https://github.com/Houst29476/readme-generator)

![readme-generator](https://user-images.githubusercontent.com/95327275/155397868-c1f698ee-2061-4502-97a2-5df3df8c5e60.png)

Table of Contents
=================

* [Description](#description)
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Useage](#useage)
* [Credit] (#credit)
* [Test](#test)
* [License](#license)

## GitHub Profile:

https://github.com/${username}

## Email Address:

${email}

## Description :

${description}

## Installation :

${installation}

## Dependencies : 

${dependencies}

## Useage :

${useage}

## Credit :

${credit}

## Test :

${test}

## License :

${license}

`}

// ----- Questions ----- //

var questions = [
    {
        type: 'input',
        name: 'username',
        message: '(1) Enter your GitHub username (Required)',
        validate: usernameInput => {
          if (usernameInput) {
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
        message: '(5) How to install the application repo? (Required)',
        default: "git clone https://github.com/houst29476/repo name.git",
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
      name: 'dependencies',
      message: '(6) Enter what commands should be used to install dependencies? (Required)',
      default: "npm i", 
      validate: dependenciesInput => {
      if (dependenciesInput) {
          return true;
        } else {
          console.log('Please enter a command to insall dependencies!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'useage',
        message: '(7) Explain how to use the site or application once installed. (Required)',
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
        name: 'test',
        message: "(8) What command should be used to run tests?",
        default: "npm test",
        validate: testInput => {
          if (testInput) {
            return true;
          } else {
            console.log('Please enter command to run tests!');
            return false;
          }
        } 
    },
    {
        type: 'input',
        name: 'credit',
        message: '(9) Identify who contributed to this project? (Required)',
        default: "Bradley Boyd",
        validate: creditInput => {
          if (creditInput) {
            return true;
          } else {
            console.log('Please identify contributors to the project!');
            return false;
          }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: '(10) What type of license applies your project? (Check all that apply)',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'MIT License', 'Mozilla Public License 2.0'],
    },
];

// ----- Provides user interface and the inquiry session flow ----- //

inquirer
    .prompt (questions)
    .then (answers => {

        const { username, email, description, installation, dependencies, useage, test, credit, license } = answers;

        const template = createReadMe(username, email, description, installation, dependencies, useage, test, credit, license);

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