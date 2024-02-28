

import React from 'react';
import ReviewList from './ReviewList';
import ReviewHighlighter from './ReviewHighlighter';
import Tooltip from './Tooltip';
import reviews from './Data.json'; 
import './App.css'
const App = () => {
  return (
    <div>
      <h1>Reviews</h1>
      <ReviewList reviews={reviews} />
      <h2>Highlighted Reviews</h2>
      <ReviewHighlighter reviews={reviews} />
      <h1>Reviews with Tooltip</h1>
      <Tooltip />
    </div>
  );
};

export default App;



