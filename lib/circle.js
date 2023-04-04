const Shapes = require('../lib/shapes.js');

class Circle extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle r="100" cx="150" cy="100" fill="red" stroke="none" />
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text> 
    </svg>
    console.log('CIRCLE');
  }
}

module.exports = Circle;
