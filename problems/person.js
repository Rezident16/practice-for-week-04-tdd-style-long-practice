class Person {
  constructor(name, age) {
    if (typeof name !== "string" || typeof age !== "number") {
      throw new TypeError("Name must be a string and age must be a number.");
    }
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hi, my name is ${this.name}`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (typeof obj !== "object" || obj === null) {
      throw new TypeError("Argument needs to be an object");
    }

    if (!obj.hasOwnProperty("name") || !obj.hasOwnProperty("age")) {
      throw new TypeError("Argument needs name and age properties");
    }

    this.name = obj.name;
    this.age = obj.age;
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (error) {
      return false;
    }
  }

  static greetAll(people) {
    if (!Array.isArray(people)) {
      throw new TypeError("Invalid argument. Expected an array.");
    }

    return people.map((person) => person.sayHello());
  }
}

module.exports = Person;
