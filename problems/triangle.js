// Your code here
class Triangle {
    constructor (side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3
    }

    hasValidSideLengths() {
        return (
            this.side1 + this.side2 > this.side3 &&
            this.side1 + this.side3 > this.side2 &&
            this.side2 + this.side3 > this.side1
          );
    }

    validate() {
        this.isValid = this.hasValidSideLengths()
    }
    static getValidTriangles(...triangles) {
        let array = []
        triangles.forEach(triangle => {
            if (triangle.isValid === true) {
                array.push(triangle)
            }
        })
        return array;
    }
}

module.exports = Triangle;
