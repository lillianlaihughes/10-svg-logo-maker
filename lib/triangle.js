const Shapes = require('../lib/shapes.js');

class Triangle extends Shapes {
  constructor(children) {
    super(children);
  }
  render() {
    console.log('TRIANGLE');
  }
}

module.exports = Triangle;
