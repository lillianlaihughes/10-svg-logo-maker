const Shapes = require('../lib/shapes.js');

/* constructor inherits these from the Parent
${this.text}
${this.colorText}
${this.colorShape}
and adds
${this.shape} from the Child
*/

class Square extends Shapes {
  constructor(text, colorText, colorShape, shape) {
    super(text, colorText, colorShape)
    this.shape = newShape; 
  }
  render() {
       // rewrite so this is the ${this.shapeCode} used in Shapes js
`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
      <rect x="50" y ="0" width="200" height="200" fill="${this.colorShape}" stroke="none" />
      
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text> 
    
    </svg>`
    console.log('SQUARE');
  }
}

module.exports = Square;
