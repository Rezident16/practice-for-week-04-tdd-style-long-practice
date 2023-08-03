const chai = require("chai");
const expect = chai.expect;

const reverseString = require("../problems/reverse-string");

describe ('reverse string function', function () {
    it ('should return the string reversed', function () {
        const word = "fun";
        expect(reverseString(word)).to.equal('nuf')
    })

    it("should throw an error if string is not type of String", () => {
        const number = 6;
        const object = { i: "am", an: "object" };
        const array = ["i", "am", "an", "array"];
    
        expect(() => reverseString(number)).to.throw(TypeError);
        expect(() => reverseString(object)).to.throw(TypeError);
        expect(() => reverseString(array)).to.throw(TypeError);
      });

})
