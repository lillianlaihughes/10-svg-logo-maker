const Shapes = require('../lib/shapes.js');

class Circle extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
    console.log('CIRCLE');
  }
}

module.exports = Circle;
