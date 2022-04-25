'use strict'

class Rectangle  {
constructor(height, width) {
this.height = height;
this.width = width;
}
calcArea() {
    return this.height * this.width;
}
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, backgroundColor) {
super(height, width); // метод вызывает все свойства, которые были у родителя.
        this.text = text;
        this.backgroundColor = backgroundColor;
    }
    showMyProps()  {
        console.log(`Текст: ${this.text}, цвет: ${this.backgroundColor}`)
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'green');
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10,10);
// const long = new Rectangle(20, 100);
//
// console.log(square.calcArea());
// console.log(long.calcArea());