// class names need to start with Capital letter
// this Parent class assigns the properies common to all Children shapes


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

module.exports = Shapes;

