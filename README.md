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
