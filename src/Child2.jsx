import React, { PureComponent } from 'react';
// import shallowCompare from 'react-addons-shallow-compare';

export default class Child2 extends PureComponent {
  //   shouldComponentUpdate(nextProps, nextState) {
  //     return shallowCompare(this, nextProps, nextState);
  //   }

  componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);

    this.interval = setInterval(() => {
      console.log('interval');
    }, 1000);
  }

  componentWillUnmount() {
    document.removeEventListener(
      'mousemove',
      this.mouseMove
    );
    clearInterval(this.interval);
  }

  mouseMove = () => {
    console.log('mouse moving...');
  };

  render() {
    console.log('Child 2 render');
    const { user } = this.props;

    return (
      <div>
        <h1>Child2 component</h1>
        <h2>{user.name}</h2>
      </div>
    );
  }
}
