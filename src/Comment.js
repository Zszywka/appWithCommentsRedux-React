import React from 'react';
//show one comment
//text -> text of CommentsList
//votes -> the number of votes cast on the comment
const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment, addComment}) =>
  <div>
    {text}
    <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>&#128077;</button>
    <button onClick={() => thumbDownComment(id)}>&#128078;</button>
    <button onClick={() => removeComment(id)}>&#9986;</button>
    <button onClick={() => editComment(id, prompt('edit'))}>&#x270E;</button>
  </div>;

export default Comment;
