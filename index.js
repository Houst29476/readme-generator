const inquirer = require('inquirer');
const fs = require('fs');

// ----- Table of Contents ----- //

let createReadMe = (username, repo, email, description, installation, dependencies, useage, credit, test, questions, license) => {
    return `

![GitHub license](https://img.shields.io/badge/MIT-license-orange)

![readme-generator](https://user-images.githubusercontent.com/95327275/155397868-c1f698ee-2061-4502-97a2-5df3df8c5e60.png)

https://user-images.githubusercontent.com/95327275/155551672-95067b3c-4470-40a8-992e-d698c6155d21.mp4

Table of Contents
=================

* [GitHub Profile](#GitHub-Profile)
* [Project Repository URL](#repo)
* [Email Adress](#email)
* [Description](#description)
* [Installation](#installation)
* [Dependencies](#dependencies)
* [Useage](#useage)
* [Credit](#credit)
* [Test](#test)
* [Questions](#Questions)
* [License](#license)

## GitHub Profile:

https://github.com/${username}

## Project Repository URL:
${repo}

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

## Questions :

${questions}

## License :

${license}

`}

// ----- Questions ----- //

var questions = [
    {
        type: 'input',
        name: 'username',
        message: '(1) Enter your GitHub username:',
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
      name: 'repo',
      message: '(2) Enter the Project Repository URL:',
      default: "https://github.com/Houst29476/(repo name)",
      validate: repoInput => {
        if (repoInput) {
          return true;
        } else {
          console.log('Please enter the project Repo URL!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: '(3) Enter your email address:',
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
        message: '(4) Enter the name of your project:',
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
        message: '(5) Please enter a short description of your project:',
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
        message: '(6) How to install the application repo?',
        default: "git clone https://github.com/houst29476/repo name.git",
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter project GitHub Repo link!');
            return false;
          }
        }
    },
    {
      type: 'input',
      name: 'dependencies',
      message: '(7) Enter what commands should be used to install dependencies?',
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
        message: '(8) Explain how to use the site or application once installed:',
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
      name: 'credit',
      message: '(9) Identify who contributed to this project:',
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
        type: 'input',
        name: 'test',
        message: "(10) What command should be used to run tests?",
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
      name: 'questions',
      message: "(11) What email address should questions be sent to?",
      default: "bradley.boyd@gmail.com",
      validate: questionsInput => {
        if (questionsInput) {
          return true;
        } else {
          console.log('Please enter email address for any questions!');
          return false;
        }
      } 
    },
    {
        type: 'checkbox',
        name: 'license',
        message: '(12) What type of license applies your project? (Check all that apply)',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'GNU GPL v3', 'MIT License', 'Mozilla Public License 2.0', 'Not Applicable'],
    },
];

// ----- Provides user interface and the inquiry session flow ----- //

inquirer
    .prompt (questions)
    .then (answers => {

        const { username, repo, email, description, installation, dependencies, useage, credit, test, questions, license } = answers;

        const template = createReadMe(username, repo, email, description, installation, dependencies, useage, credit, test, questions, license);

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
