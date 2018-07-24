import React, { Component } from 'react';
import './CommentFormAdd.css';

class CommentFormAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addComment(this.state.text);
    this.setState({
      text: ''
    });
  }

  changeHandler(event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return(
      <form onSubmit = {event => this.handleSubmit(event)}>
        <input
          onChange = {event => this.changeHandler(event)}
          required = 'required'
          placeholder ='write a new comment'
          value = {this.state.text}
        />
        <button type={'submit'}>&#9993;</button>
      </form>
    );
  }
}

export default CommentFormAdd;
