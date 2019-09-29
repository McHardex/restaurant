import React from 'react';
import { shallow } from 'enzyme';
import Restaurant from '../index';

describe('<Restaurant />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Restaurant />);
    expect(wrapper.length).toEqual(1);
  });

  it('should update first item in restaurant array to have favorite key of true', () => {
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

  it('should filter restaurant lists based on search parameter', () => {
    const e = { target: { value: "Tanoshii" }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.searchBox').simulate('change', e);
    expect(wrapper.state().restaurants.length).toEqual(1);
  });

  it('should update first item in restaurant array to have favorite key of true', () => {
    const e = { target: { id: 0 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(0).simulate('click', e);
    expect(wrapper.state().restaurants[0].favorite).toEqual(true);
  });

  it('should update second item in restaurant array to have favorite key of true', () => {
    const e = { target: { id: 1 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(1).simulate('click', e);
    expect(wrapper.state().restaurants[1].favorite).toEqual(true);
  });

  it('should sort restaurant list based on best match', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.best-match').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('Tanoshii Sushi');
  });
});
