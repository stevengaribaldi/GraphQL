class Player {
  constructor(
    public first: string,
    public last: string,
    protected _score: number = 0,
  ) {}
  secertMethod(): void {
    console.log('sercert');
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
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
  public isAdmin: boolean = true;
  maxSCore() {
    this._score = 3209;
  }
}

const jjisjj = new SuperPlayer('elton', 'steel', 980);
console.log(jjisjj.maxSCore);

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Jacket implements Colorful {
  constructor(
    public color: string,
    public brand: string,
  ) {}
  print() {
    console.log(`${this.color} ${this.brand}`);
  }
}

abstract class Employee {
  constructor(
    public first: string,
    public last: string,
  ) {}
  abstract getPay(): number;
}

class FullTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private salary: number,
    private hoursWorked: number,
  ) {
    super(first, last);
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
