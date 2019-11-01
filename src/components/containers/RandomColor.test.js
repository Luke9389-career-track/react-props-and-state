import React from 'react';
import { shallow } from 'enzyme';
import RandomColor from './RandomColor';

describe('Random Color component', () => {
  it('chooses a color', () => {
    const wrapper = shallow(<RandomColor />);
    expect(wrapper).toMatchSnapshot();
  });

  it('console logs on color click', () => {
    const wrapper = shallow(<RandomColor />);
    const oldColor = wrapper.state('backgroundColor');
    wrapper.instance().setStateColor();
    expect(wrapper.state('backgroundColor') === oldColor).toBe(false) || !expect(wrapper).toMatchSnapshot();
  });
});
