import React, { useState } from 'react'
import avatarImg from './avatar.svg'
import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'
import styled from 'styled-components'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 100%;
  margin-right: 15px;
`

const CommentBlock = styled.div`
  display: flex;
  padding: 5px;
`

const CommentInner = styled.div`
  cursor: pointer;
`

const CommentText = styled.p`
  font-size: 1rem;
  font-family: 'Roboto-Regular';
  word-break: break-word;
  background: ${({ theme }) => theme.commentTextBg};
  color: ${({ theme }) => theme.textColor};
  width: auto;
  margin: 0;
  padding: 5px;
  border-radius: 5px;
`

const Toggler = styled.span`
  cursor: pointer;
  height: auto;
  position: relative;
  padding-left: 5px;
  left: calc(100% - 1.5rem);
`

const limitText = text => text.split('\n').slice(0, 3).join('\n').slice(0, 350)

let isBig = false

const initLimitText = text => {
  if (text.split('\n').length > 3 || text.length > 350) {
    isBig = true
  } else {
    isBig = false
  }
  if (text.split('\n').length >= 3 || text.length > 350) {
    return limitText(text)
  } else {
    return text
  }
}

const Comment = props => {
  const [commentMode, setCommentMode] = useState(false)

  const [commentText, setCommentText] = useState(initLimitText(props.text))

  const handleText = (text, commentMode) => {
    if ((text.split('\n').length >= 3 || text.length > 350) && !commentMode) {
      setCommentText(limitText(text))
    } else {
      setCommentText(text)
    }
  }

  const toggleComment = () => {
    if (!commentMode) {
      setCommentMode(true)
      handleText(props.text, true)
    } else {
      setCommentMode(false)
      handleText(props.text, false)
    }
  }

  return (
    <CommentBlock>
      <Avatar src={avatarImg} />
      <CommentInner onClick={toggleComment}>
        <CommentText>
          {isBig && !commentMode
            ? replaceNlToBr(commentText + '...')
            : replaceNlToBr(commentText)}
          {isBig && (
            <Toggler>
              {commentMode ? (
                <Icon icon={faToggleOn} />
              ) : (
                <Icon icon={faToggleOff} />
              )}
            </Toggler>
          )}
        </CommentText>
      </CommentInner>
    </CommentBlock>
  )
}

export default Comment
