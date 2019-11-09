import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';

export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black',
    yuh: false
  };

  setStateColor = () => {
    const colors = ['red', 'green', 'black', 'yellow'];
    const randColor = colors[Math.floor(Math.random() * colors.length)];
    if(randColor === this.state.backgroundColor) {
      this.setState({ backgroundColor: 'transparent', yuh: true });
    } else {
      this.setState({ backgroundColor: randColor, yuh: false });
    }
  }

  componentDidMount() {
    setInterval(() => { this.setStateColor(); }, 1000);
  }

  render() {
    const { backgroundColor, yuh } = this.state;
    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} yuh={yuh} />
      </>
    );
  }
}
