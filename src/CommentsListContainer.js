//connect ->used to connect components to the STORE(I argument->mapStateToProps)
import {connect} from 'react-redux';
import CommentsList from './CommentsList';

//component Container, works with REDUX
//dividing the status into appropriate props
//and forwarding them to the CommentsList
//mapStateToProps takes -> state app/ give -> object with some valuable props
// and this object hooks to CommentsList
const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentsList);
