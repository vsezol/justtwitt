import React, { useState, useMemo } from 'react'

import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'
import styled from 'styled-components'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons'

import { getMaxContWidth } from '../../../styled/utils'

import av1 from './av1.svg'
import av2 from './av2.svg'
import av3 from './av3.svg'
import av4 from './av4.svg'
import av5 from './av5.svg'
import av6 from './av6.svg'
const avatars = [av1, av2, av3, av4, av5, av6]
const getRandomAvatar = () => avatars[Math.round(Math.random() * 5)]

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
// 32 - avatar width | 15 - avatar padding | 60 - comments padding | 16 ~ 1rem
const rowLength = Math.round(
  (getMaxContWidth(window.innerWidth) - (32 + 15 + 60)) / (16 / 1.6)
)
const maxRows = 3
const maxTextLength = rowLength * maxRows

const limitText = text =>
  text.split('\n').slice(0, maxRows).join('\n').slice(0, maxTextLength)

let isBig = false
const initLimitText = text => {
  if (text.split('\n').length > maxRows || text.length > maxTextLength) {
    isBig = true
  } else {
    isBig = false
  }
  if (text.split('\n').length >= maxRows || text.length > maxTextLength) {
    return limitText(text)
  } else {
    return text
  }
}

export default React.memo(props => {
  const [commentMode, setCommentMode] = useState(false)

  const [commentText, setCommentText] = useState(initLimitText(props.text))

  const handleText = (text, commentMode) => {
    if (
      (text.split('\n').length >= maxRows || text.length > maxTextLength) &&
      !commentMode
    ) {
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
      <Avatar src={useMemo(() => getRandomAvatar(), [])} />
      <CommentInner onClick={toggleComment}>
        <CommentText>
          {/* {isBig && !commentMode
            ? replaceNlToBr(commentText + '...')
            : replaceNlToBr(commentText)} */}
          {replaceNlToBr(commentText)}
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
})
