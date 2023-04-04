// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const maxLength = require('inquirer-maxlength-input-prompt')

inquirer.registerPrompt('maxlength-input', maxLength)

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'maxlength-input',
        name: 'characters',
        message: 'Enter up to 3 characters',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'color-chara',
        message: 'Enter a text color (keyword or hex #).',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape.',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'color-shape',
        message: 'Enter a shape color (ideally a different color than the one you entered above!).',
    }
];

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log('Generated logo.svg') 
    })
}
// Function call to initialize app
init();