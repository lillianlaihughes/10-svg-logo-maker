const Shapes = require('../lib/shapes.js');

class Square extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
    <svg width="300" height="200">
      <rect x="50" y ="0" width="200" height="200" fill="yellow" stroke="none" />
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="black">SVG</text> 
    </svg>
    console.log('SQUARE');
  }
}

module.exports = Square;
