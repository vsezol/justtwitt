import React, { Component } from 'react'
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
  transition: color 0.25s ease-in-out;
  cursor: pointer;
  align-self: flex-end;
  color: ${({ isenabled, theme }) =>
    !!isenabled ? theme.scrollBtnHoverColor : theme.scrollBtnColor};
`

const CreateCommentBlock = styled.div`
  border: 2px solid
    ${({ isenabled, theme }) =>
      !!isenabled ? theme.scrollBtnHoverColor : theme.scrollBtnColor};
  transition: border 0.25s ease-in-out;
  border-radius: 5px;
  width: 100%;
  display: flex;
  align-items: center;
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
  &::placeholder {
    font-family: 'Roboto-Regular';
    color: ${({ theme }) => theme.textColor};
  }
`

class CreateComment extends Component {
  state = {
    commentText: '',
    isBtnEnabled: false
  }

  onCommentChangeHandler = event => {
    const text = event.currentTarget.value
    if (text.length >= 0 && text.length <= 2000) {
      this.setState(() => ({
        commentText: text,
        isBtnEnabled: true
      }))
    } else {
      this.setState(() => ({ isBtnEnabled: false }))
    }
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      if (!isMobileDevice() && this.state.isBtnEnabled) {
        this.onSubmitHandler()
      }
    }
  }

  onSubmitHandler = () => {
    const text = filterNl(this.state.commentText).trim()
    if (text) {
      this.props.onSubmit(text)
      this.setState(() => ({ commentText: '', isEnabled: false }))
    } else {
      this.setState(() => ({ isEnabled: false }))
    }
  }

  render() {
    return (
      <CreateCommentBlock
        isActive={!!this.state.commentText}
        isenabled={this.state.isBtnEnabled ? '1' : ''}
      >
        <TextArea
          placeholder='Write a comment ...'
          value={this.state.commentText}
          onChange={this.onCommentChangeHandler}
          onKeyDown={this.handleKeyPress}
          maxRows={10}
        />
        <SendBtn
          icon={faChevronCircleRight}
          onClick={this.onSubmitHandler}
          isenabled={this.state.isBtnEnabled ? '1' : ''}
        />
      </CreateCommentBlock>
    )
  }
}

export default CreateComment
