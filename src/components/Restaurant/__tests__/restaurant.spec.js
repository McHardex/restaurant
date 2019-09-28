import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from '../index';

describe('<Restaurant />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Restaurant />);
    expect(wrapper.length).toEqual(1);
  });
});
