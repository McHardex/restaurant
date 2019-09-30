import React, { Component } from 'react';
import data from '../../mockData';
import sortRestaurant from '../../helper/sort';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentDidMount = () => {
    const { restaurants } = data;
    this.setState({ restaurants });
  }

  sort = (sortValue) => {
    const { restaurants } = this.state;
    const sortedRestaurants = sortRestaurant(restaurants, sortValue);
    this.setState({ restaurants: sortedRestaurants }); 
  }

  filterRestaurant = ({target}) => {
    const searchValue = target.value.toLowerCase();
    const { restaurants } = data;
    const searchResult = restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchValue));
    this.setState({ restaurants: searchResult });
  }

  toggleFavorite = ({ target }) => {
    const { restaurants } = this.state;
    const restaurant = restaurants[target.id];

    if(restaurant.hasOwnProperty('favorite') && restaurant.favorite === true) {
      const newState = Object.assign(restaurant, { favorite: false });
      this.setState({ restaurants: Object.assign(restaurants, newState) })
    } else {
      const newState = Object.assign(restaurant, { favorite: true });
      this.setState({ restaurants: Object.assign(restaurants, newState) })
    }
  }

  render() {
    const { restaurants } = this.state;
    return (
      <div>
        <input type="search" onChange={this.filterRestaurant} className="searchBox" />
        <div className="sort">
          <button type="button" className="best-match" onClick={() => this.sort('bestMatch')}>Best Match</button>
          <button type="button" className="newest" onClick={() => this.sort('newest')}>Newest</button>
          <button type="button" className="ratingAverage" onClick={() => this.sort('ratingAverage')}>Rating Average</button>
          <button type="button" className="distance" onClick={() => this.sort('distance')}>Distance</button>
          <button type="button" className="popularity" onClick={() => this.sort('popularity')}>Popularity</button>
          <button type="button" className="averageProductPrice" onClick={() => this.sort('averageProductPrice')}>Average Product Price</button>
          <button type="button" className="deliveryCosts" onClick={() => this.sort('deliveryCosts')}>Delivery Costs</button>
          <button type="button" className="minCost" onClick={() => this.sort('minCost')}>Minimum Cost</button>
        </div>
        {
          restaurants.map((restaurant, index) => (
            <div key={index} className="restaurant-list" id={index}>
              <p>{restaurant.name}</p>
              <p>{restaurant.status}</p>
              <button 
                type="button"
              >
                {restaurant.favorite ? 
                <i className="fav-button fas fa-heart"
                  id={index}
                  onClick={this.toggleFavorite}
                /> : 
                <i className="fav-button far fa-heart"
                  id={index}
                  onClick={this.toggleFavorite}
                />}
              </button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Restaurant;

