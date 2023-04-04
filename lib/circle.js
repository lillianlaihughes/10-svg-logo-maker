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
    this.shape = 'circle r="100" cx="150" cy="100"'
    this.textCode = 'x="150" y="120"'
  }
};

module.exports = Circle;


/* text coordinates for
circle = x="150" y="120"
square = x="150" y="120"     
triangle = x="150" y="155"

this x and y values go into this part:
<text ${COORDINATES} font-size="60" text-anchor="middle" fill="${this.colorText}">${this.text}</text> 
*/