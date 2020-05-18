import React from 'react'
import { Media, Image } from 'react-bootstrap'
import avatarImg from './avatar.svg'
import classes from './Comment.module.sass'

const Comment = props => {
  return (
    <>
      <Media>
        <Image
          width={64}
          height={64}
          className='mr-3'
          rounded
          src={avatarImg}
        />
        <Media.Body>
          <h5 className={classes.Comment__Id + ' m-0 p-0'}>№ {props.id}</h5>
          <p className={classes.Comment__Text + ' m-0 p-0'}>{props.text}</p>
        </Media.Body>
      </Media>
      {/* если длина равна id, значит не выводить разделитель (последний комментарий) */}
      {props.len !== props.id ? <hr className='mt-2 mb-2' /> : null}
    </>
  )
}

export default Comment
