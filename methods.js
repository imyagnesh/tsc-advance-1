const updatedUsers = users.map((x) => {
  if (x.name === "rohit") {
    return { ...x, age: 28 };
  }
  return x;
});

console.log(updatedUsers);

// const arr = [1,2,3,4,5,6];

// const newArr = arr.map(item => {
//     if(item % 2 === 0) {
//         return item * 2
//     }
//     return item
// });

// console.log(newArr);

// const index = users.findIndex((item, index) => {
//     return item.name === "afdsaf";
// });

// const isChildExist = users.some((item, index) => {
//     return item.age < 18;
// });

// console.log(isChildExist);

// const isEveryAdult = users.every(x => x.age >= 18);

// console.log(isEveryAdult);

// console.log(index);

// const rohitInfo = users.find((item, index) => {
//     return item.name === "afasf";
// });

// console.log(rohitInfo);

const maleRecords = users.filter((x) => x.gender === "other");

console.log(maleRecords);

console.log(rohitInfo);

// const newUsers = [
//     ...users.slice(0, index),
//     {...users[index], age: 28},
//     ...users.slice(index + 1),
// ]

// console.log(newUsers);

// users[index].age = 28;

// console.log(users);

// let isRohitExist = false;

// O(N)
// O(logN)
// O(1)

// for (let i = 0; i < users.length; i++) {
//     console.log(i);
//     const element = users[i];
//     if(element.name === "rohit") {
//         isRohitExist = true;
//         break;
//     }
// }

// console.log(isRohitExist);
