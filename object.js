// primitive

// string
// boolean
// number
// bigInt
// symbols

// non-primitive

// object
// arrays
// null

const fistName = "Yagnesh";

const user = {
  fistName,
  lastName: "modh",
  age: 33,
  fullName() {
    return `${this.fistName} ${this.lastName}`;
  },
  age: 30,
};

console.log(user);

console.log(user.fistName);
console.log(user.lastName);
console.log(user.age);
console.log(user.fullName());
