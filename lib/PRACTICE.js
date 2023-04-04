class Shapes {
    // parent class constructor
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="transparent" /><${this.shapeSyntax} fill="${this.shapeColor}" /><text ${this.textCoordX} ${this.textCoordY} font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }

};
// child shape constructors
class Triangle extends Shapes {

    constructor(shapeColor, text, textColor, shapeSyntax, textCoordX, textCoordY) {
        super(shapeColor, text, textColor)
        this.shapeSyntax = 'polygon cx="150" cy="100" points="150, 18 244, 182 56, 182"';
        this.textCoordX = 'x="145"';
        this.textCoordY = 'y="150"';
    }

}
class Circle extends Shapes {
    constructor(shapeColor, text, textColor, shapeSyntax, textCoordX, textCoordY) {
        super(shapeColor, text, textColor)
        this.shapeSyntax = 'circle cx="160" cy="100" r="80"';
        this.textCoordX = 'x="160"';
        this.textCoordY = 'y="120"';
    }

}
class Square extends Shapes {
    constructor(shapeColor, text, textColor, shapeSyntax, textCoordX, textCoordY) {
        super(shapeColor, text, textColor)
        this.shapeSyntax = 'rect x="75" y="25" width="150" height="150"';
        this.textCoordX = 'x="150"';
        this.textCoordY = 'y="120"';
    }

}
//export
module.exports = { Shapes, Triangle, Circle, Square };