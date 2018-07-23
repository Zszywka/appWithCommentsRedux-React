import {connect} from 'react-redux';
import Comment from './Comment';
import {thumbUpComment, thumbDownComment, addComment, removeComment, editComment} from './action.js':

const mapDispatchToProps = dispatch => ({
  thumbUpComment: (id) => dispatch(thumbUpComment(id)),
  thumbDownComment: (id) => dispatch(thumbDownComment(id)),
  removeComment: (id) => dispatch(removeComment(id)),
  editComment: (text, id) => dispatch(editComment(text, id)),
  addComment: (text, id ,votes) => dispatch(addComment(text, id, votes))
});

export default connect(null, mapDispatchToProps)(Comment);
