import React from 'react';

// const Comment = ({text, votes}) => <li>{text} <span>votes: {votes}</span></li>;

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment, removeComment, editComment, addComment}) =>
  <div>
    {text}
    <span>votes: {votes}</span>
    <button onClick={() => thumbUpComment(id)}>Thumb up</button>
    <button onClick={() => thumbDownComment(id)}>Thumb down</button>
    <button onClick={() => removeComment(id)}>Remove</button>
    <button onClick={() => editComment(id, text)}>Edit</button>
    <button onClick={() => addComment(id, text, votes)}>Add</button>
  </div>;

export default Comment;
