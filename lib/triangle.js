const Shapes = require('../lib/shapes.js');

class Triangle extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,0 300,200 0, 200" fill="red" stroke="none"/>    
      <text x="150" y="155" font-size="60" text-anchor="middle" fill="black">SVG</text> 
    </svg>

    console.log('TRIANGLE');
  }
}

module.exports = Triangle;

// a hint from the original README 
test('should render a triangle with blue fill when render() is called', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
  });
