import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('Random Color component', () => {
  it('chooses a color', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });
});
