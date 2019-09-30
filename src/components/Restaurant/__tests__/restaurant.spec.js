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

  it('should update second item in restaurant array to have favorite key of true', () => {
    const e = { target: { id: 1 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(1).simulate('click', e);
    expect(wrapper.state().restaurants[1].favorite).toEqual(true);
  });

  it('should filter restaurant lists based on search parameter', () => {
    const e = { target: { value: "Tanoshii" }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.searchBox').simulate('change', e);
    expect(wrapper.state().restaurants.length).toEqual(1);
  });

  it('should sort restaurant list by best match', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.best-match').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('Tanoshii Sushi');
  });

  it('should set first item in restaurant array to have favorite key to false', () => {
    const e = { target: { id: 0 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(0).simulate('click', e);
    expect(wrapper.state().restaurants[0].favorite).toEqual(false);
  });

  it('should set second item in restaurant array to have favorite key of false', () => {
    const e = { target: { id: 1 }};
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.fav-button').at(0).simulate('click', e);
    expect(wrapper.state().restaurants[1].favorite).toEqual(false);
  });

  it('should sort restaurant list by newest', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.newest').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('Tanoshii Sushi');
  });

  it('should sort restaurant list by ratingAverage', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.ratingAverage').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('De Amsterdamsche Tram');
  });

  it('should sort restaurant list by distance', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.distance').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('Tanoshii Sushi');
  });

  it('should sort restaurant list by popularity', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.popularity').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('Lunchpakketdienst');
  });

  it('should sort restaurant list by Average Product Price', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.averageProductPrice').simulate('click');
    expect(wrapper.state().restaurants.length).toEqual(19);
  });

  it('should sort restaurant list by delivery cost', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.deliveryCosts').simulate('click');
    expect(wrapper.state().restaurants.length).toEqual(19);
  });

  it('should sort restaurant list by minimum cost', () => {
    const wrapper = shallow(<Restaurant />);
    wrapper.find('.minCost').simulate('click');
    expect(wrapper.state().restaurants[0].name).toEqual('De Amsterdamsche Tram');
  });
});
