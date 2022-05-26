import React, { Component } from 'react';

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

class App extends Component {
  // state = {
  //   counter: 0,
  // };

  constructor(props) {
    super(props);

    this.state = {
      greet: `Hello ${props.name}`,
    };
  }

  // greetInEnglish = () => {
  //   this.setState((state, { name }) => ({
  //     greet: `Hello ${name}`,
  //   }));
  // };

  // greetInFrench = () => {
  //   this.setState((state, { name }) => ({
  //     greet: `hola ${name}`,
  //   }));
  // };

  greet = language => {
    this.setState((state, { name }) => ({
      greet: `${
        language === 'en' ? 'Hello' : 'hola'
      } ${name}`,
    }));
  };

  render() {
    const { greet } = this.state;
    return (
      <div>
        <h1>{greet}</h1>
        <button
          type="button"
          onClick={() => this.greet('en')}>
          English
        </button>
        <button
          type="button"
          onClick={() => this.greet('fr')}>
          French
        </button>
      </div>
    );
  }
}

export default App;
