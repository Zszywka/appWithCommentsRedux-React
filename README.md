This project was bootstrapped with Create React App.
--------------------------------------------------------------------------------
You should:
1. write the console:
create-react-app redux-demo
cd redux-demo
npm install --save redux react-redux
npm start
--------------------------------------------------------------------------------
When we create CommentsListContainer.js, use:
import {connect} from 'react-redux';
connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
https://github.com/reduxjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
--------------------------------------------------------------------------------
You should:
1. write in the console:
-> npm install --save redux-logger
(applying middleware)
2. write in index.js:
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(logger)
);
3. press button F12 and see working your app

OR You use Redux DevTools
1. write in the console:
-> npm install --save-dev redux-devtools
-> npm install --save-dev redux-devtools-dock-monitor
-> npm install --save-dev redux-devtools-log-monitor
2. create file src/DevTools.js
3. implementaction in a file where is STORE (in our app it is index.js):
import { createStore, combineReducers } from 'redux';
import DevTools from './DevTools';

const store = createStore(
  reducer,
  DevTools.instrument()
);
4. embedding a tool component somewhere in the application(ex: App.js):
import DevTools from './DevTools';
const App = () => {
  return (
    <div className="App">
      <CommentsListContainer />
      <DevTools />
    </div>
  );
};
