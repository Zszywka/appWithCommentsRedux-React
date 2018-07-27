import React from 'react';
import Comment from './CommentContainer.js';
import CommentFormAdd from './CommentFormAdd.js'

const CommentsList = ({comments, addComment}) =>
  <div>
    <ul>{comments.map(comment => <Comment key={comment.id} {...comment}/>)}</ul>
    <CommentFormAdd addComment = { text => addComment(text)} />
  </div>

export default CommentsList;
