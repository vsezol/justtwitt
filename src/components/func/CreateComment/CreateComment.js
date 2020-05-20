import React, { Component } from 'react'
import classes from './CreateComment.module.sass'
import TextareaAutosize from 'react-textarea-autosize'

class CreateComment extends Component {
  state = {
    commentText: ''
  }

  onCommentChangeHandler = event => {
    const text = event.currentTarget.value
    this.setState(() => ({
      commentText: text
    }))
  }

  onSubmitHandler = () => {
    this.props.onSubmit(this.state.commentText)
    this.setState(() => ({ commentText: '' }))
  }

  render() {
    return (
      <div
        className={classes.CreateComment + ' w-100 d-flex align-items-center'}
      >
        <TextareaAutosize
          placeholder='Write a comment ...'
          className={
            classes.CreateComment__TextArea +
            ' rounded-0 border-0 w-100 textarea p-2'
          }
          value={this.state.commentText}
          onChange={this.onCommentChangeHandler.bind(this)}
        />
        <i
          className={
            classes.CreateComment__SendButton +
            ' fas fa-arrow-circle-right rounded-circle'
          }
          onClick={() => this.onSubmitHandler()}
        ></i>
      </div>
    )
  }
}

export default CreateComment
