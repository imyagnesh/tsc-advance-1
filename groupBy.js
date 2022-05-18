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
    name: "Taimur",
    age: 08,
    gender: "female",
  },
  {
    name: "priyanka",
    age: 38,
    gender: "female",
  },
  {
    name: "Amitabh",
    age: 65,
    gender: "male",
  },
];

// const groupByAge = users.reduce((p, c) => {
//     const baseAge = Math.floor(c.age/ 10);
//     const key = `${baseAge}0-${baseAge}9`
//     if(!p[key]) {
//         p[key] = [];
//     }
//     p[key].push(c)
//     return p;
// }, {})

// console.log(groupByAge);

// {
//     "00-09": [],
//     "10-19": [],
//     "20-29": [],
//     "30-39": [],
//     "60-69": []
// }

// const groupByGender = users.reduce((p, c) => {
//     const key = c.gender
//     if(!p[key]) {
//         p[key] = [];
//     }
//     p[key].push(c)
//     return p;
// }, {})

// console.log(groupByGender);

// {
//     male: [],
//     female: []
// }

// const everyUsers = users.reduce((p, c) => {
//     if(c.age < 18) {
//         return false;
//     }
//     return p;
// }, true)

// console.log(everyUsers);
