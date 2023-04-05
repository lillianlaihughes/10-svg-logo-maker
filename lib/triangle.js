const Shapes = require('../lib/shapes.js');

/* constructor inherits these from the Parent
${this.text}
${this.colorText}
${this.colorShape}
and adds
${this.shape} from the Child
*/

class Triangle extends Shapes {
  constructor(text, colorText, colorShape, shape) {
    super(text, colorText, colorShape)
    this.shape = 'polygon points="150,0 300,200 0, 200"'
    this.textCode = 'x="150" y="155"'
  }
};

module.exports = Triangle;

/* a hint from the original README 
test('should render a triangle with blue fill when render() is called', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
  });
*/