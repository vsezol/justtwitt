import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import avatarImg from './avatar.svg'
import classes from './Comment.module.sass'
import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'

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
    <div className={classes.Comment + ' p-1'}>
      <Image
        width={32}
        height={32}
        className={classes.Comment__Avatar + ' mr-3'}
        roundedCircle
        src={avatarImg}
      />
      <div onClick={toggleComment} style={{ cursor: 'pointer' }}>
        <p className={classes.Comment__Text + ' m-0 p-1 rounded'}>
          {isBig && !commentMode
            ? replaceNlToBr(commentText + '...')
            : replaceNlToBr(commentText)}
          {isBig && (
            <span className={classes.Toggler}>
              {commentMode ? (
                <i className='fas fa-toggle-on'></i>
              ) : (
                <i className='fas fa-toggle-off'></i>
              )}
            </span>
          )}
        </p>
      </div>
    </div>
  )
}

export default Comment
