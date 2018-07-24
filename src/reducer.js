//method to connect small reducers(users.js and comments.js) in one main reducer(this file)
import { combineReducers } from 'redux';
//small reducers for part of app
import comments from './comments.js';
import users from './users.js';

//main reducer (it connects small reducers)
const reducer = combineReducers({
  comments,
  users
});

export default reducer;
