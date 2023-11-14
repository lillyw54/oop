const inquirer = require("inquirer");
const fs = require("fs");
const { Circle, Triangle, Square } = require("./lib/shape");
const terminalImage = require("terminal-image");

function init() {
  inquirer
    .prompt([
      // Prompt questions
      {
        type: "input", 
        message: "Write 3 charcters",
        name: "text"
      },
      {
        type: "input", 
        message: "What is the color of the text?",
        name: "textColor"
      },
      {
        type: "list", 
        message: "What is the shape",
        name: "shape",
        choices: ["circle", "triangle", "square"]
      },
      {
        type: "input", 
        message: "What is the color of the shape",
        name: "color"
      }
    ])
    .then((response) => writeToFile(response));
}

function writeToFile(response) {
  generateSVG(300, 200, response.text, response.textColor, response.color, response.shape);
}

function generateSVG(width, height, text, textColor, bgColor, shape) {
  // Generate the SVG code
 let svg=""

 if(shape == "circle"){
  var shapeobj= new Circle (150, 100, 100, bgColor)
  svg = `
  <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shapeobj.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
  </svg>
  `
 }
 
   fs.writeFileSync("./examples/logo.svg", svg);
console.log (svg)
  // Read the SVG file and display it in the terminal
  // fs.readFile("./examples/logo.svg", (err, data) => {
  //   if (err) throw err;
  //    terminalImage.buffer(data).then((image) => {
  //    console.log(image);
  //    });
  // });
}

init();