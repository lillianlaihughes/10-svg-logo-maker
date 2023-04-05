# 10 OOP Challenge: SVG Logo Generator

## Motivation
Similar to the previous week's project, we were challenged to build a command-line application in Node.js that generates an SVG logo with user input. 

The CLI application prompts the user to provide text (up to 3 characters) for the logo and to select a shape from a list, and it also asks the user to enter a color for each. The SVG logo generated is saved as an `.svg` file. This simple logo saves the user time by creating a quick placeholder image so they can move onto the next step of their project.

I learned about Scalable Vector Graphics (cool!) and about testing suites (also cool, but a lot harder to grasp). I also learned the importance of creating a directory structue to stay organized while in development. I utilized many of the skills covered up to this current module to build this project, and as a result have a better understanding of how all these bits fit together.

## Instructions
The application can be invoked by using the following command in your CLI:

```
node index.js
```
The sample SVG file will output to the `examples` folder and it will be named `logo.svg`


## User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
OH WAIT LEMME FIX THAT FOR YOU. WHAT I ACTUALLY MEAN IS...
SO THAT I don't have to hire a graphic designer yet in this early stage of my project
AND I can quickly create a simple logo I can use as a placeholder image while I continue coding
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```


## Review

You are required to submit the following for review:

* A walkthrough video that demonstrates the functionality of the application and passing tests:

* At least one sample SVG file generated using your application:

* The URL of the GitHub repository, with a unique name and a README describing the project:
