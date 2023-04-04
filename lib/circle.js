const Shapes = require('../lib/shapes.js');

/* constructor inherits these from the Parent
${this.text}
${this.colorText}
${this.colorShape}
and adds
${this.shape} from the Child
*/

class Circle extends Shapes {
  constructor(text, colorText, colorShape, shape) {
    super(text, colorText, colorShape)
    this.shape = ${shape}; // do I need to use newShape here?
  }
  render() {
<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      
      <circle r="100" cx="150" cy="100" fill="${this.colorShape}" stroke="none" />
      
      <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text> 
    
    </svg>
    console.log('CIRCLE');
  }
}

module.exports = Circle;