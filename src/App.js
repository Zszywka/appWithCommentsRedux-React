import React from 'react';
import './App.css';
//main component Container
import CommentsListContainer from './CommentsListContainer.js';
import DevTools from './DevTools';

//main Component
//render all aplication
const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};

export default App;
