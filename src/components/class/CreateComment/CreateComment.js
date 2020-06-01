import React, { Component, createRef } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import isMobileDevice from '../../../modules/isMobileDevice/isMobileDevice'
import filterNl from '../../../modules/filterNl/filterNl'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const SendBtn = styled(Icon)`
  padding: 3px;
  margin: 0px;
  font-size: 2.1rem;
  transition: color 0.25s;
  color: ${({ theme }) => theme.scrollBtnColor};
  cursor: pointer;
  align-self: flex-end;
`

const CreateCommentBlock = styled.div`
  border: 2px solid ${({ theme }) => theme.scrollBtnColor};
  transition: border 0.25s;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  &:active,
  &:focus,
  &:hover {
    border: 2px solid ${({ theme }) => theme.scrollBtnHoverColor};
  }
  ${({ isActive }) => console.log(isActive)} && ${SendBtn} {
    color: ${({ theme }) => theme.scrollBtnHoverColor};
  }
`

const TextArea = styled(TextareaAutosize)`
  outline: none;
  box-shadow: none;
  font-family: 'Roboto-Regular';
  box-sizing: border-box;
  resize: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  border: 0px;
  font-size: 1rem;
  background: ${({ theme }) => theme.tredBg};
  color: ${({ theme }) => theme.textColor};
  &:active,
  &:focus,
  &:hover {
    outline: none;
    box-shadow: none;
  }
`

class CreateComment extends Component {
  state = {
    commentText: '',
    warning: null,
    target: null
  }

  sendRef = createRef()

  onCommentChangeHandler = event => {
    const text = event.currentTarget.value
    const target = this.sendRef.current
    if (text.length <= 1000) {
      this.setState(() => ({
        commentText: text
      }))
    } else {
      this.setState(() => ({ warning: 'Maximum size 1000', target }))
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey && !isMobileDevice()) {
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
      <CreateCommentBlock isActive={!!this.state.commentText}>
        <TextArea
          placeholder='Write a comment ...'
          value={this.state.commentText}
          onChange={this.onCommentChangeHandler}
          onKeyUp={this.handleKeyPress}
          maxRows={10}
        />
        <SendBtn
          icon={faChevronCircleRight}
          onClick={this.onSubmitHandler}
          ref={this.sendRef}
        />
      </CreateCommentBlock>
    )
  }
}

export default CreateComment
