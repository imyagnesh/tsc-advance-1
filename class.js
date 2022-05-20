// encapsulation
// abstraction
// inheritance

// function Animal(name) {
//     return `this animal name is ${name}`
// }

// console.log(Animal("scorpy"));

// const yagneshInfo =  {
//     name: "Yagnesh",
//     age: 33,
//     about() {
//         return `name is ${this.name} and age is ${this.age}`
//     }
// }

// const rohitInfo =  {
//     name: "Rohot",
//     age: 30,
//     about() {
//         return `name is ${this.name} and age is ${this.age}`
//     }
// }






class Employee {
    abc = 1;

    constructor (name, employeeID) {
        this.name = name;
        this.employeeId = employeeID;
    }

    set name(val) {
        this._name = Employee.upperName(val)
    }

    get name() {
        return this._name;
    }

    static data = { a: 1}

    static xyz() {

    }

    static upperName(val) {
        return `${val[0].toUpperCase()}${val.slice(1)}`
    }

    employeeInfo() {
        return `Employee Name is ${this.name} and employeeId is ${this.employeeId}`
    }

    changeName(name) {
        this.name = name;
    }
}


class CEO extends Employee {
    constructor() {
        super("Yagnesh", "1002")
    }

    hireEmployee() {
        console.log("hire emplotee");
    }

    employeeInfo() {
        const res = super.employeeInfo();
        return `I am CEO and ${res}`
    }

}

class Manager  extends Employee {
    
}


const ceo = new CEO()

console.log(ceo.name);
console.log(ceo.hireEmployee());
console.log(ceo.employeeInfo());





const name = "yagnesh";

console.log(Employee.upperName(name));


const emp = new Employee("yagnesh", 1002);
const emp1 = new Employee("Virat", 1003);
emp.changeName("yag", "abc")
console.log(emp.name);
console.log(emp.employeeId);
console.log(emp.employeeInfo());

console.log(emp1.name);
console.log(emp1.employeeId);
console.log(emp1.employeeInfo());











