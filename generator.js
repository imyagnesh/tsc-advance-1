function* xyz() {
  try {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return "completed";
  } catch (error) {
    console.log(error);
  }
}

class Auth {
  #login() {
    console.log("login successfull");
  }

  #logout() {
    console.log("logout succesfull");
  }

  *auth() {
    yield this.#login();
    yield this.#logout();
  }
}

const auth = new Auth();

const authGen = auth.auth();

authGen.next();
authGen.next();

// const gen = xyz();

// for (const iterator of gen) {
//     console.log(iterator);
// }

// console.log(gen.next());
// gen.throw(new Error("something wrong"))
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
