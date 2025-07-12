export class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("This abstract class");
        }
    }

    area() {}
    parameter() {}
    toString() {}
}
export class Circle extends Shape {
    constructor(r) {
        super();
        this.r = r;
    }

    area() {
        return Math.PI * this.r ** 2;
    }

    parameter() {
        return 2 * Math.PI * this.r;
    }

    toString() {
        return `Circle / radius: ${this.r} / area: ${this.area().toFixed(2)} / perimeter: ${this.parameter().toFixed(2)}`;
    }
}
export class Rectangle extends Shape {
    constructor(l, w) {
        super();
        this.l = l;
        this.w = w;
    }

    area() {
        return this.l * this.w;
    }

    parameter() {
        return 2 * (this.l + this.w);
    }

    toString() {
        return `Rectangle / length: ${this.l} / width: ${this.w} / area: ${this.area()} / perimeter: ${this.parameter()}`;
    }
}
export class Square extends Rectangle {
    constructor(s) {
        super(s, s); // Pass side as both length and width
        this.s = s;
    }

    toString() {
        return `Square / side: ${this.s} / area: ${this.area()} / perimeter: ${this.parameter()}`;
    }
}

