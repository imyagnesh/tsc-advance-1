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
  state = {
    counter: 0,
  };

  incrementCounter = () => {
    // const { counter } = this.state;
    // this.setState({
    //   counter: counter + 1,
    // });

    // this.setState({ counter: this.state.counter + 1 });

    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));

    // this.setState(({ counter }) => ({
    //   counter: counter + 1,
    // }));
  };

  render() {
    console.log('render');
    const { counter } = this.state;

    return (
      <div>
        <h1 className="text-6xl font-bold text-red-500">
          Hello from h1
        </h1>
        <h2>{`Counter: ${counter}`}</h2>
        <button
          type="button"
          onClick={this.incrementCounter}>
          Increment Counter
        </button>
      </div>
    );
  }
}

export default App;
