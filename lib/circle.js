const Shapes = require('../lib/shapes.js');

class Circle extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
    <svg width="300" height="200">
      <circle r="100" cx="150" cy="100" fill="red" stroke="none" />
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">SVG</text> 
    </svg>
    console.log('CIRCLE');
  }
}

module.exports = Circle;
