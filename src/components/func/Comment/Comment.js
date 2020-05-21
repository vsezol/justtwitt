import React from 'react'
import { Media, Image } from 'react-bootstrap'
import avatarImg from './avatar.svg'
import classes from './Comment.module.sass'
import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'

const Comment = props => {
  return (
    <>
      <Media>
        <Image
          width={48}
          height={48}
          className='mr-3'
          rounded
          src={avatarImg}
        />
        <Media.Body>
          <h5 className={classes.Comment__Id + ' m-0 p-0'}>№ {props.id}</h5>
          <p className={classes.Comment__Text + ' m-0 p-0'}>
            {replaceNlToBr(props.text)}
          </p>
        </Media.Body>
      </Media>
      {props.len !== props.index + 1 ? <hr className='mt-2 mb-2' /> : null}
    </>
  )
}

export default Comment
