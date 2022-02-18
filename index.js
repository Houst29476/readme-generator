const inquirer = require('inquirer');
const fs = require('fs');


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