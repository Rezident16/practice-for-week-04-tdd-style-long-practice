// Your code here
const chai = require("chai")
const expect = chai.expect

const Triangle = require('../problems/triangle')
// const Scalene = require('../problems/triangle')
// const Isosceles = require('../problems/triangle')


// describe ('Triangle', function () {
// it("If instance has side1, side2, and side3", function (){
//     const triangle = new Triangle(3, 4, 5);
//     expect(triangle).to.have.property('side1')
//     expect(triangle).to.have.property('side2')
//     expect(triangle).to.have.property('side3')
// })


//     it("Should return the perimeter of the Triangle instance", function (){
//         const triangle = new Triangle(3, 4, 5);
//         const perimeter = triangle.getPerimeter()
//         expect((perimeter).to.equal(3 + 4 + 5))
//     })

//     it("Should return true if the sum of two sides is greater than the remaining side", () => {
//         expect((triangle1.hasValidSideLengths()).to.be.true)
//     })
//     it("Should return false if the sum of two sides is less than the remaining side", () => {
//         expect((triangle2.hasValidSideLengths()).to.be.false)
//     })


//     it("It should add true to isValid key to the instance", () => {
//         expect((triangle1.isValid).to.be.true) //to.eql(true)
//     })
//     it("It should add false to isValid key to the instance", () => {
//         expect((triangle1.isValid).to.be.false)
//     })


//     it("Should return the all the instances of the valid triangles", () => {
//         const triangle3 = new Triangle (15, 20, 25)
//         const triangle4 = new Triangle (20, 25, 30)
//         expect(() => Triangle.getValidTriangles([triangle1, triangle3, triangle4]).to.equal([""]))
//     })

// })


describe("Triangle", function () {
    
    it("should create a new instance with side lengths set correctly", function () {
      const triangle1 = new Triangle(10, 15, 20);
      expect(triangle1).to.have.property("side1");
      expect(triangle1).to.have.property("side2");
      expect(triangle1).to.have.property("side3");
    });
  
    it("should calculate the perimeter correctly with getPerimeter()", function () {
      const triangle1 = new Triangle(10, 15, 20);
      expect(triangle1.getPerimeter()).to.equal(45);
    });
  
    it("should return true for a valid triangle with hasValidSideLengths()", function () {
        const triangle1 = new Triangle(10, 15, 20);
      const isValid = triangle1.hasValidSideLengths();
      expect(isValid).to.be.true;
    });
  
    it("should return false for an invalid triangle with hasValidSideLengths()", function () {
      const triangle2 = new Triangle(10, 15, 100);
      const isValid = triangle2.hasValidSideLengths();
      expect(isValid).to.be.false;
    });
  
    it("should set the isValid property to true for a valid triangle with validate()", function () {
        const triangle1 = new Triangle(10, 15, 20);
        triangle1.validate();
      expect(triangle1).to.have.property("isValid", true);
    });
  
    it("should set the isValid property to false for an invalid triangle with validate()", function () {
      const triangle2 = new Triangle(10, 15, 100);
      triangle2.validate();
      expect(triangle2).to.have.property("isValid", false);
    });
  
    it("should return an array of valid triangles with getValidTriangles()", function () {
      const triangle1 = new Triangle(10, 15, 20);
      const triangle2 = new Triangle(10, 15, 100);
      const triangle3 = new Triangle(20, 25, 30);
  
      triangle1.validate();
      triangle2.validate();
      triangle3.validate();
  
      const validTriangles = Triangle.getValidTriangles(triangle1, triangle2, triangle3);
      expect(validTriangles).to.include(triangle1);
      expect(validTriangles).to.include(triangle3);
    });
  });
