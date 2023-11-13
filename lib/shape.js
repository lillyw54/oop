
class Circle {
    constructor(cx, cy, r, fill) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.fill = fill;
    }
  
render() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }
  }
  
class Triangle {
    constructor(points, fill) {
      this.points = points;
      this.fill = fill;
    }
  
render() {
      return `<polygon points="${this.points}" fill="${this.fill}" />`;
    }
  }
  
class Square {
    constructor(width, height, fill) {
      this.width = width;
      this.height = height;
      this.fill = fill;
    }
  
render() {
      return `<rect width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
  }
  
function generateSVG(width, height, text, textColor, bgColor, shape) {
    let shapeSvg = '';
    let textX = 0;
    let textY = 0;
  
    switch (shape) {
      case "Circle":
        const circle = new Circle(width / 2, height / 2, 50, bgColor);
        shapeSvg = circle.render();
        textX = width / 2;
        textY = height / 2;
        break;
      case "Triangle":
        const triangle = new Triangle("50,0 100,100 0,100", bgColor);
        shapeSvg = triangle.render();
        textX = width / 2 - 100;
        textY = height / 2 - 50;
        break;
      case "Square":
        const square = new Square(100, 100, bgColor);
        shapeSvg = square.render();
        textX = width / 2 - 100;
        textY = height / 2;
        break;
      default:
        break;
    }
  
const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="white" />
      <g transform="translate(${width / 2 - 50},${height / 2 - 50})">
        ${shapeSvg}
        <text x="${textX}" y="${textY}" fill="${textColor}" text-anchor="middle" alignment-baseline="middle">${text}</text>
      </g>
    </svg>`;
  
    fs.writeFileSync("./examples/logo.svg", svg);
  }
  
  module.exports = { generateSVG };
  class Circle {
    constructor(cx, cy, r, fill) {
      this.cx = cx;
      this.cy = cy;
      this.r = r;
      this.fill = fill;
    }
  
    render() {
      return `<circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" fill="${this.fill}" />`;
    }
  }
  
class Triangle {
    constructor(points, fill) {
      this.points = points;
      this.fill = fill;
    }
  
render() {
      return `<polygon points="${this.points}" fill="${this.fill}" />`;
    }
  }
  
class Square {
    constructor(width, height, fill) {
      this.width = width;
      this.height = height;
      this.fill = fill;
    }
  
render() {
      return `<rect width="${this.width}" height="${this.height}" fill="${this.fill}" />`;
    }
}