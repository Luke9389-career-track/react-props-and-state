import React, { Component } from 'react';
import ColorDisplay from '../colors/ColorDisplay';
import ColorPicker from '../colors/ColorPicker';

export default class ColorContainer extends Component {
  state = {
    backgroundColor: 'black',
    yuh: false
  };

  selectColor = backgroundColor => {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor, yuh } = this.state;
    const colors = ['red', 'green', 'black', 'yellow'];

    return (
      <>
        <ColorDisplay backgroundColor={backgroundColor} yuh={yuh} />
        <ColorPicker
          selectColor={this.selectColor}
          colors={colors} />
      </>
    );
  }

}
