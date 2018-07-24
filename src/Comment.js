import React from 'react';
//show one comment
//text -> text of CommentsList
//votes -> the number of votes cast on the comment
const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment, addComment}) =>
  <div>
    {text}
    <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove</button>
    <button onClick={() => editComment(id, prompt('edit'))}>Edit</button>
  </div>;

export default Comment;
