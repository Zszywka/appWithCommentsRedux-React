////connect ->used to connect components to the STORE(II arguments->mapDispatchToProps)
import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, removeComment, editComment} from './actions.js';

//connect action to STORE (Combining actions with React)
//Packaging for the Comment.js component and conect him to Redux
//mapuje odpowiednie wywołanie akcji do propsów
const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (text, id) => dispatch(editComment(text, id)),
  // addComment: (text, id ,votes) => dispatch(addComment(text, id, votes))
});

export default connect(null, mapDispatchToProps)(Comment);
