import React, { PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare';

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }
  state = {
    counter: 0,
    error: '',
  };

  componentDidMount() {
    try {
      document.addEventListener(
        'mousemove',
        this.mouseMove
      );

      this.interval = setInterval(() => {
        this.setState(({ counter }, props) => ({
          counter: counter + 1,
        }));
      }, 1000);
    } catch (error) {
      this.setState({ error });
    }
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousemove',
      this.mouseMove
    );
    clearInterval(this.interval);
  }

  mouseMove = () => {
    try {
      console.log('mouse moving...');
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    console.log('Child 2 render');
    const { user } = this.props;
    const { counter, error } = this.state;

    if (error) {
      return <h1>{error.message}</h1>;
    }

    if (counter > 10) {
      throw new Error('something wrong');
    }

    return (
      <div>
        <h1>Child2 component</h1>
        <h2>{user.name}</h2>
      </div>
    );
  }
}
