// testing suite for all shapes (Shapes is the parent, circle/square/triangle are the Children)

const Shapes = require('../lib/shapes.js');

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(shapes.render).toThrow(err);
  });
});

// a hint from the original README 
test('should render a triangle with pink fill and no border when render() is called', () => {
const shape = new Triangle();
shape.setColor("pink");
expect(shape.render()).toEqual('<polygon points="150,0 300,200 0, 200" fill="pink" stroke="none"/>')
});

/* <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,0 300,200 0, 200" fill="red" stroke="none"/>    
      <text x="150" y="155" font-size="60" text-anchor="middle" fill="black">SVG</text> 
</svg>

class Shapes {
  constructor(text, colorText, colorShape) {
    this.text = text;
    this.colorText = colorText; 
    this.colorShape = colorShape;
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    
      <${this.shape} fill="${this.colorShape}" stroke="none" />
    
      <text ${this.textCode} font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text> 
    
    </svg>`
  }
}; */