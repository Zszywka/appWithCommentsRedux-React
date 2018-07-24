import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './reducer';
import registerServiceWorker from './registerServiceWorker';
import { addComment } from './actions.js';
//the REACT component(privider data)
//store is visible every time you use the connect method -
//without it, ReactRedux doesn't know what is the source
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import DevTools from  './DevTools'
//store -> application's magazine
const store = createStore(reducer);
//a view where Redux connects with React,
ReactDOM.render(
  // to props.store we assign the store variable
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));

registerServiceWorker();
