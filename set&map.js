// primitive
const arr = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8];

const set = new Set();

console.log(set);

for (const iterator of set) {
  console.log(iterator);
}

const a = { a: 1, b: 2, c: 3 };
const b = { a: 1, b: 2, c: 3 };

// for (const [key, value] of Object.entries(a)) {
//     console.log(key);
//     console.log(value);
// //   console.log(key);
// //   console.log(a[key]);
// }

// let result = true;
// for (const key in a) {
//     console.log(key);
//     if(a[key] !== b[key]) {
//         result = false;
//         break;
//     }
// }

const weakSet = new WeakSet();

const obj = { a: 1 };

weakSet.add(obj);

console.log(weakSet.has(obj));

// for (const iterator of weakSet) {

// }

const map = new Map();

map.set("yagnesh", {
  name: "yagnesh",
  age: 30,
});

map.set("yagnesh", {
  name: "yagnesh",
  age: 33,
});

const users = [
  {
    name: "yagnesh",
    age: 33,
    gender: "male",
  },
  {
    name: "virat",
    age: 30,
    gender: "male",
  },
  {
    name: "rohit",
    age: 35,
    gender: "male",
  },
  {
    name: "rohit",
    age: 35,
    gender: "male",
  },
  {
    name: "dipeeka",
    age: 28,
    gender: "female",
  },
  {
    name: "alia",
    age: 18,
    gender: "female",
  },
  {
    name: "priyanka",
    age: 38,
    gender: "female",
  },
];

const newUsers = [...new Map(users.map((x) => [x["name"], x])).values()];

console.log(newUsers);
