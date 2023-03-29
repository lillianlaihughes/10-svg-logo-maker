// testing suite for all shapes (shapes is the parent, circle/square/triangle are the children)

const Shapes = require('../lib/shapes.js');

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(shapes.render).toThrow(err);
  });
});

// a hint from the original README 
test('should render a triangle with blue fill when render() is called', () => {
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
});