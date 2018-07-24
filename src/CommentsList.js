import React from 'react';
import Comment from './CommentContainer';

//recive date from the CommentContainer(array comments) and render the list of comments
//a List that allows you to display comments
//comments -> array with lisf of comments
//mapping the transmitted array with comments to the rendered list of comments
const CommentsList = ({comments}) =>
  <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>;

export default CommentsList;
