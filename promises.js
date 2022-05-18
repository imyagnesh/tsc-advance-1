// const { log } = require("async")

const ls = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("ls resolved");
    }, 300);
  });
};

const ms = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("ms resolved");
    }, 500);
  });
};

const rs = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("rs resolved");
    }, 200);
  });
};

const loadPage = async () => {
  try {
    console.time("promise");
    const res = await Promise.any([rs(), ms(), ls()]);

    console.log(res);
    console.timeEnd("promise");
  } catch (error) {
    console.log(error);
  }
};

loadPage();

// const login = () => {
//     return new Promise((resolve, reject) => {
//         //  server call
//         setTimeout(() => {
//             resolve("token received")
//          }, 1000)
//      })
// }

// const products = (token) => {
//     return new Promise((resolve, reject) => {
//         if(!token) reject("token not available")
//         //  server call
//         setTimeout(() => {
//             resolve("products received")
//          }, 1000)
//      })
// }

// const loadData = async () => {
//     try {
//         const token = await login();
//         const productsData = await products()
//         console.log(token);
//         console.log(productsData);
//     } catch (error) {
//         console.log(error);
//     }
// }

// login()
// .then(token => {
//     console.log(token);
//     products(token)
//     .then(val1 => {
//         console.log(val1);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// p1()
// .then(val => {
//     console.log(val);
// })
// .catch(err => {
//     console.log(err);
// })
