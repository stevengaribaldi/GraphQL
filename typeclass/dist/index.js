"use strict";
class Player {
    constructor(first, last, _score = 0) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secertMethod() {
        console.log('sercert');
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error('err');
        }
        this._score = newScore;
    }
}
const jj = new Player('elton', 'steel', 0);
console.log(jj.secertMethod());
jj.secertMethod();
console.log(jj);
jj.score = 99;
console.log(jj);
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxSCore() {
        this._score = 3209;
    }
}
const jjisjj = new SuperPlayer('elton', 'steel', 980);
console.log(jjisjj.maxSCore);
class Jacket {
    constructor(color, brand) {
        this.color = color;
        this.brand = brand;
    }
    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTimeEmployee extends Employee {
    constructor(first, last, salary, hoursWorked) {
        super(first, last);
        this.salary = salary;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.salary * this.hoursWorked;
    }
}
const bbetty = new FullTimeEmployee('betty', 'bill', 23, 43);
console.log(bbetty);
console.log(bbetty.getPay());
// Employee;
// -FullTimeEmployee;
// -PartTimeEmployee
