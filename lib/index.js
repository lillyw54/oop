const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./shape");
const terminalImage = require("terminal-image");

function init() {
  inquirer
    .prompt([
      // Prompt questions
    ])
    .then((response) => writeToFile(response));
}

function writeToFile(response) {
  generateSVG(300, 200, response.name, response.textColor, response.color, response.shape);
}

function generateSVG(width, height, text, textColor, bgColor, shape) {
  // Generate the SVG code

  fs.writeFileSync("./examples/logo.svg", svg);

  // Read the SVG file and display it in the terminal
  fs.readFile("./examples/logo.svg", (err, data) => {
    if (err) throw err;
    terminalImage.buffer(data).then((image) => {
      console.log(image);
    });
  });
}

init();