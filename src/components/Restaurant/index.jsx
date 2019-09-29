import React, { Component } from 'react';
import data from '../../mockData';

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
        <input type="search" onChange={this.filterRestaurant} />
        {
          restaurants.map((restaurant, index) => (
            <div key={index} className="name" id={index}>
              <p>{restaurant.name}</p>
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

