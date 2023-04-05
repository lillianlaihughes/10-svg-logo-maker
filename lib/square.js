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
    this.shape = 'rect x="50" y ="0" width="200" height="200"'
    this.textCode = 'x="150" y="120"'
  }
};

module.exports = Square;
