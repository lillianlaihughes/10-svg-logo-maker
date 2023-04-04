// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const shapes = require('./lib/shapes')

const maxLength = require('inquirer-maxlength-input-prompt');
const { connected } = require('process');
const { BlockList } = require('net');

inquirer.registerPrompt('maxlength-input', maxLength)

// array of questions for user input
const questions = [
    {
        type: 'maxlength-input',
        name: 'text',
        message: 'Enter up to 3 characters',
        maxLength: 3
    },
    {
        type: 'input',
        name: 'colorText',
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
        name: 'colorShape',
        message: 'Enter a shape color (ideally a different color than the one you entered above!).',
    }
];

// function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(({ text, colorText, shape, colorShape }) => {
        let newShape;
        // use switch to go through shape options
        switch (shape) {
            case 'circle':
                newShape = new Circle(text, colorText, colorShape);
                break;
            case 'square':
                newShape = new Square(text, colorText, colorShape);
                break;
            case 'triangle':
                newShape = new Triangle(text, colorText, colorShape);
                break;
        }
        fs.writeFile('./examples/logo.svg', newShape.render(text, colorText, colorShape));
        console.log('Generated logo.svg');
        });
    };

// Function call to initialize app
init();
