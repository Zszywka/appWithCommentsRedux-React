import React from 'react';
import './App.css';
//main component Container
import CommentsListContainer from './CommentsListContainer.js';

//main Component
//render all aplication
const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
    </div>
  );
};

export default App;
