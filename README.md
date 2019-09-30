# Restaurant list

## Description

**Restaurant list** is a simple application where users are able to sort the restaurant list based on its current openings state, can favorite a restaurant, can search for restaurants by their name and can select a sort value to further sort the list.

## Table of Contents

- [Description](#description)
- [Setup](#setup)
  - [Dependencies](#dependencies)
  - [Getting Started](#getting-started)
- [Checklists](#checklists)
- [Prototype](#prototype)
- [Deployment](#deployment)


## Setup

### Dependencies

List of libraries, tools, etc needed (e.g. npm etc)

- [React.js](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Jest and Enzyme] - For unit testing
- [Font-awesome](https://fontawesome.com) - social logos on your website with Font Awesome


### Getting Started

- Clone the repo - `git clone https://github.com/McHardex/restaurant.git`
- Change into the project directory - `cd restaurant`
- Install project dependencies run `npm install`
- Run the server `npm start` or `yarn start`

### Running the tests
- run `npm test`
- run `npm run coverage` to get the test coverage report

## Checklists
- Users can search for restaurants by name
- Users can favorite and unfavorite a restaurant
- Users can sort restaurant lists from top to bottom based on:
  - best match
  - newest
  - rating average
  - distance
  - popularity
  - average product price
  - delivery costs
  - minimum costs
  - top restaurants which is calculated by (distance * popularity) + rating average

**Note**: 
- Favorite restaurants are displayed at the top of the sorting list
  - If favorite restaurants are more than one, they are sorted based on their current opening states(**opened** on top of the list, **order ahead** at the middle and **closed** at the bottom **
- Restaurants with opening state of:
  - **Opened** restaurants are displayed on _top_ of the list
  - **order ahead** are displayed in the _middle_
  - **closed** are displayed at the _bottom_ of the list

## Prototype

The application is staged [here](https://restaurant-mchardex.netlify.com/)

## Deployment

The application is deployed with Netlify.
