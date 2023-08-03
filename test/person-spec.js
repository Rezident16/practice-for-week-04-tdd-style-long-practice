const chai = require("chai")
const expect = chai.expect

const Person = require('../problems/person')


const guy = new Person('joe', 26)


describe("Person Class", () => {

let guy;
let girl;


beforeEach(()=>{
    guy = new Person('joe', 26)
    girl = new Person('lily', 22)
    
})


    it("If instance has name and age", () => {

        expect(guy).to.have.property('name')
        expect(guy).to.have.property('age')

        // expect(guy).to.have.all.keys('name','age')

    })


    it("should return a string of the instance", () => {

       expect(guy.sayHello()).to.equal('Hi, my name is joe')

    })

    it("should return a string stating person1 visited person2", () => {

        expect(() => guy.visit(girl)).to.equal("joe visited lily")

    })

    it("switchVisit will invoke ",() =>{

        let visitResult = guy.switchVisit(girl)
        expect(visitResult).to.equal('lily visited joe')

    })

    it("should updated name and age when update() is called", () => {

        guy.update({name: 'john', age: 30})
        expect(guy.name).to.equal('john')
        expect(guy.age).to.equal(30)

    })

    it("should throw a TypeError if the arg is not an object", () => {

        expect(() => guy.update('string')).to.throw(TypeError, "Argument needs to be an object")
        expect(() => guy.update({})).to.throw(TypeError, "Argument needs name and age properties")

    })


    it("should call the update method and return true if successful",() => {

        expect(() => guy.tryUpdate({name: 'john', age: 30})).to.be.true
        expect(() => guy.tryUpdate('string')).to.be.false

    })

    

describe("static greetAll method", () => {
    it("should call sayHello on each person", () => {

        expect(() => Person.greetAll([guy,girl]).to.equal(["Hi, my name is joe", "Hi, my name is lily"]))


    })

})


})