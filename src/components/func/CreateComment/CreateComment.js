import React, { Component, createRef } from 'react'
import classes from './CreateComment.module.sass'
import TextareaAutosize from 'react-textarea-autosize'
import { Overlay, Tooltip } from 'react-bootstrap'

const filterNl = text => {
  const textArr = text.split('\n')
  const fTextArr = []
  let isLastSymbolNl = false
  for (let i = 0; i <= textArr.length; i++) {
    const item = textArr[i]
    if (!isLastSymbolNl && item === '') {
      fTextArr.push(item)
      isLastSymbolNl = true
    } else if (!isLastSymbolNl && item !== '') {
      fTextArr.push(item)
    } else if (isLastSymbolNl && item !== '') {
      fTextArr.push(item)
      isLastSymbolNl = false
    }
  }
  return fTextArr.join('\n')
}

class CreateComment extends Component {
  state = {
    commentText: '',
    warning: null,
    target: null
  }

  sendRef = createRef()

  onCommentChangeHandler = event => {
    const text = event.currentTarget.value
    this.setState(() => ({
      commentText: text
    }))
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      this.onSubmitHandler()
    }
  }

  onSubmitHandler = () => {
    const target = this.sendRef.current
    const text = filterNl(this.state.commentText).trim()
    if (text) {
      this.props.onSubmit(text)
      this.setState(() => ({ commentText: '', target, warning: null }))
    } else {
      this.setState(() => ({ warning: 'You can not send a void', target }))
    }
  }

  render() {
    return (
      <div
        className={classes.CreateComment + ' w-100 d-flex align-items-center'}
      >
        <Overlay
          target={this.state.target}
          show={!!this.state.warning}
          placement='left'
        >
          <Tooltip
            className={classes.CreateComment__Warning}
            onClick={() =>
              this.setState(() => ({
                warning: null
              }))
            }
          >
            {this.state.warning}
          </Tooltip>
        </Overlay>
        <TextareaAutosize
          placeholder='Write a comment ...'
          className={
            classes.CreateComment__TextArea +
            ' rounded-0 border-0 w-100 textarea p-2'
          }
          value={this.state.commentText}
          onChange={this.onCommentChangeHandler.bind(this)}
          onKeyUp={this.handleKeyPress.bind(this)}
          maxRows={10}
        />
        <i
          className={
            classes.CreateComment__SendButton +
            ' fas fa-chevron-circle-right rounded-circle'
          }
          onClick={() => this.onSubmitHandler()}
          ref={this.sendRef}
        ></i>
      </div>
    )
  }
}

export default CreateComment
