import React from 'react'
import { Image } from 'react-bootstrap'
import avatarImg from './avatar.svg'
import classes from './Comment.module.sass'
import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'

const Comment = props => {
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
          {replaceNlToBr(props.text)}
        </p>
      </div>
    </div>
  )
}

export default Comment
