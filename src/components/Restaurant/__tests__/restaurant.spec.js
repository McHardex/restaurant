import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from '../index';

describe('<Restaurant />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Restaurant />);
    expect(wrapper.length).toEqual(1);
  });

  it('should update specific object in restaurant array to have favorite key of true', () => {
    const e = { target: { id: 0 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(0).simulate('click', e);
    expect(wrapper.state().restaurants[0].favorite).toEqual(true);
  });

  it('should set favorite key in previously updated object in restaurant array back to false', () => {
    const e = { target: { id: 0 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(0).simulate('click', e);
    expect(wrapper.state().restaurants[0].favorite).toEqual(false);
  });
});
