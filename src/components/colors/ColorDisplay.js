import React from 'react';
import PropTypes from 'prop-types';

const ColorDisplay = ({ backgroundColor, yuh }) => (
  <div style={{
    backgroundColor,
    width: '100px',
    height: '100px'
  }}>
    {yuh ? <img 
      src='https://i.dailymail.co.uk/i/pix/2016/03/18/15/324D202500000578-3498922-image-a-33_1458315465874.jpg' 
      style={{ width: '100px', height: '100px' }} /> : null}
  </div>
);

ColorDisplay.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  yuh: PropTypes.bool.isRequired
};

export default ColorDisplay;
