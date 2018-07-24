import React from 'react';
import Comment from './CommentContainer.js';
//Form to add a comment
import CommentFormAdd from './CommentFormAdd.js'
//recive date from the CommentContainer(array comments) and render the list of comments
//a List that allows you to display comments
//comments -> array with lisf of comments
//mapping the transmitted array with comments to the rendered list of comments
//CommentFormAdd -> form to add a comment
const CommentsList = ({comments, addComment}) =>
  <div>
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    <CommentFormAdd addComment = { text => addComment(text)} />
  </div>

export default CommentsList;
