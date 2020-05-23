import React, { useState } from 'react'
import { Image } from 'react-bootstrap'
import avatarImg from './avatar.svg'
import classes from './Comment.module.sass'
import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'

const Comment = props => {
  const [commentMode, setCommentMode] = useState(false)

  const [commentText, setCommentText] = useState(props.text)

  const limitText = text => text.slice(0, 30)

  // const closeComment = () => {
  //   setCommentMode(false)
  //   setCommentText(limitText(props.text))
  // }

  // const openComment = () => {
  //   setCommentMode(true)
  //   setCommentText(props.text)
  // }

  // const commentLength = () => {
  //   if (props.text.length > 50) {
  //     closeComment()
  //   }
  // }

  return (
    <div className={classes.Comment + ' p-1'}>
      <Image
        width={32}
        height={32}
        className={classes.Comment__Avatar + ' mr-3'}
        roundedCircle
        src={avatarImg}
      />
      <div>
        <p className={classes.Comment__Text + ' m-0 p-1 rounded'}>
          {replaceNlToBr(limitText(commentText))}
        </p>
      </div>
    </div>
  )
}

export default Comment
