import React, { Component } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';

// Function Component
// function App() {
//   return (
//     <div>
//       <h1 className="text-6xl font-bold text-red-500">
//         Hello from h1
//       </h1>
//     </div>
//   );
// }

// 4 Stages of Life Cycle

// 1. Mounting
// a. Constructor
// b. getDerivedStateFromProps
// c. render
// d. componentDidMount

// 2. Updating
// a. getDerivedStateFromProps
// b. shouldComponentUpdate
// c. render
// d. getSnapshotBeforeUpdate
// e. componentDidUpdate

// 3. Unmounting
//

// 4. Error

class App extends Component {
  // Note: you can make api(server) call but you cant set state value base on api response
  constructor(props) {
    console.log('Constructor');

    super(props);

    this.state = {
      greet: `hello ${props.name}`,
      counter: 0,
      user: {
        name: 'yagnesh',
      },
    };

    console.log(document.getElementById('heading'));
    // analytics
    // api call
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (!state?.greet) {
  //     return {
  //       greet: `hello ${props.name}`,
  //     };
  //   }
  //   return null;
  // }

  // DOM manipulation
  // Event register
  // fetch data on page load
  componentDidMount() {
    console.log(document.getElementById('heading'));
    document.getElementById('heading').style = 'color: red';

    document.addEventListener('copy', () => {
      console.log('copied');
    });

    // api call
    // setState
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    return 10;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  greetUser = language => {
    this.setState((state, { name }) => ({
      greet: `${language === 'en' ? 'hello' : 'hola'} ${
        state.name
      }`,
    }));
  };

  changeUsername = () => {
    this.setState(({ user }) => ({
      user: { ...user, name: 'rohit' },
    }));
  };

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    const { greet, message, user, counter } = this.state;
    return (
      <div>
        <h1 id="heading">{greet}</h1>
        <h2>{message}</h2>
        <h3>{user.name}</h3>
        <h4>{counter}</h4>
        <button type="button" onClick={this.changeCounter}>
          Change counter
        </button>
        <button
          type="button"
          onClick={() => this.greetUser('en')}>
          English
        </button>
        <button
          type="button"
          onClick={() => this.greetUser('fr')}>
          French
        </button>
        <Child1 />
        {counter < 5 && <Child2 user={user} />}

        <button type="button" onClick={this.changeUsername}>
          Change Username
        </button>
      </div>
    );
  }
}

export default App;
