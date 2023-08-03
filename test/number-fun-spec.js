
const chai = require("chai")
const expect = chai.expect;

const { returnsThree, reciprocal } = require('../problems/number-fun')


describe("returnsThree function", function(){
    it('function should return 3', function(){

    // const three = returnsThree(num)
    const three = returnsThree()
    expect(three).to.equal(3)


    })

})

describe("reciprocal function", function(){
    it('function should intake a number and return the reciprocal', function(){

        let num1 = -10
        let num2 = 1000001
        let num = 5;

        expect(() => reciprocal(num1)).to.throw(RangeError)
        expect(() => reciprocal(num2)).to.throw(RangeError)

        expect(reciprocal(num)).to.equal(1/5)

    })

    it('function should be a number',() => {

        let arg1 = 'string'
        let arg2 = true

        expect(() => reciprocal(arg1)).to.throw(TypeError)
        expect(() => reciprocal(arg2)).to.throw(TypeError)


    })
    

})
