import React, { createRef } from 'react';
import Restaurant from '../Restaurant';
import './App.scss';
import '../../responsiveness.css';

const App = () => {
  let scroll = createRef();

  const refs = () => {
    scroll.current.scrollIntoView({
      behaviour: 'smooth',
      block: 'start'
    });
  }
  return (
    <div className="App">
      <div className="header">
        <div className="overlay" />
        <h1>Restaurant.</h1>
        <div className="header-content">
          <p>Find amazing restaurants near you</p>
          <button type="button" className="explore" onClick={refs}>Explore</button>
        </div>
      </div>
      <Restaurant reference={scroll}/>
    </div>
  );
}

export default App;
