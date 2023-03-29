const Shapes = require('../lib/shapes.js');

class Square extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
    console.log('SQUARE');
  }
}

module.exports = Square;
