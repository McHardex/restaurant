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

  render() {
    const { restaurants } = this.state;
    return (
      <div>
        {
          restaurants.map((restaurant, index) => (
            <div key={index} className="name" id={index}>
              <p>{restaurant.name}</p>
              <button type="button">Make Favourite</button>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Restaurant;

