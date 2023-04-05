// testing suite for all shapes (Shapes is the parent, circle/square/triangle are the Children)

const Shapes = require('./shapes');
const Circle = require('./circle')
const Square = require('./square')
const Triangle = require('./triangle')

describe('Shapes', () => {
  test('should throw error if render() is called', () => {
    const shape = new Shapes();
    const err = new Error('Child class must implement a render() method.')
    expect(shapes.render).toThrow(err);
  });
});

test('should render a triangle with red fill and black text when render() is called', () => {
  const shape = new Triangle("red", "SVG", "black");
  expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,0 300,200 0, 200" fill="red" stroke="none"/><text x="150" y="155" font-size="60" text-anchor="middle" fill="black">SVG</text></svg>')
  });

test('should render a circle with green fill and white text when render() is called', () => {
  const shape = new Circle("green", "SVG", "white");
  expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="green" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text></svg>')
  });

test('should render a square with yellow fill and black text when render() is called', () => {
    const shape = new Square("yellow", "SVG", );
    expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y ="0" width="200" height="200" fill="yellow" stroke="none" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="black">SVG</text></svg>')
    });
  

/*
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
}; 
*/