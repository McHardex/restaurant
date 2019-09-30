import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from '../../mockData';
import sortRestaurant from '../../helper/sort';
import 'bootstrap/dist/css/bootstrap.min.css';
import './restaurant.scss';
import meal from '../../images/meal.jpg';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
  }

  componentDidMount = () => {
    const { restaurants } = data;
    restaurants.forEach((restaurant) => {
      const { sortingValues: { distance, popularity, ratingAverage }} = restaurant;
      const topRestaurant = (distance * popularity) + ratingAverage;
      Object.assign(restaurant.sortingValues, { topRestaurant });
    });
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

    if(restaurant.hasOwnProperty('favorite') && restaurant.favorite) {
      const newState = Object.assign(restaurant, { favorite: false });
      this.setState({ restaurants: Object.assign(restaurants, newState) })
    } else {
      const newState = Object.assign(restaurant, { favorite: true });
      this.setState({ restaurants: Object.assign(restaurants, newState) })
    }
  }

  render() {
    const { restaurants } = this.state;
    const { reference } = this.props;
    return (
      <div className="restaurant" ref={reference}>
        <div className="search-sort">
          <input type="search" onChange={this.filterRestaurant} className="searchBox" placeholder="Search Restaurants" />
          <h3>Sort Restaurant:</h3>
          <div className="sort">
            <button type="button" className="best-match" onClick={() => this.sort('bestMatch')}>Best Match</button>
            <button type="button" className="newest" onClick={() => this.sort('newest')}>Newest</button>
            <button type="button" className="ratingAverage" onClick={() => this.sort('ratingAverage')}>Rating Average</button>
            <button type="button" className="distance" onClick={() => this.sort('distance')}>Distance</button>
            <button type="button" className="popularity" onClick={() => this.sort('popularity')}>Popularity</button>
            <button type="button" className="averageProductPrice" onClick={() => this.sort('averageProductPrice')}>Average Product Price</button>
            <button type="button" className="deliveryCosts" onClick={() => this.sort('deliveryCosts')}>Delivery Costs</button>
            <button type="button" className="minCost" onClick={() => this.sort('minCost')}>Minimum Cost</button>
            <button type="button" className="topRestaurant" onClick={() => this.sort('topRestaurant')}>Top Restaurants</button>
          </div>
        </div>
        {restaurants.length === 0 && <p className="no-result">No result found</p>}
        <div className="restaurant-list">
        {
          restaurants.map((restaurant, index) => (
              <Card style={{ width: '100%' }} key={index}>
                <Card.Img variant="top" src={meal} />
                <Card.Body>
                  <Card.Title>{restaurant.name}</Card.Title>
                  <Card.Text><i className="fas fa-utensils" /> {restaurant.status}</Card.Text>
                  <Button variant="primary">
                      {restaurant.favorite ? 
                    <i className="fav-button fas fa-heart"
                      id={index}
                      onClick={this.toggleFavorite}
                    /> : 
                    <i className="fav-button far fa-heart"
                      id={index}
                      onClick={this.toggleFavorite}
                    />}
                  </Button>
                </Card.Body>
              </Card>
          ))
        }
        </div>
      </div>
    )
  }
}

export default Restaurant;

