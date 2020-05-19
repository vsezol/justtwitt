import React from 'react'
import classes from './CreateComment.module.sass'
import TextareaAutosize from 'react-textarea-autosize'
import { Button } from 'react-bootstrap'

const CreateComment = props => {
  return (
    <div className={classes.CreateComment + ' w-100'}>
      <i className={classes.CreateComment__SendButton + ' fas fa-paper-plane'} ></i>
      <TextareaAutosize
        placeholder='Write a comment ...'
        className={
          classes.CreateComment__TextArea + ' rounded-0 w-100 textarea p-2'
        }
      />
    </div>
  )
}

export default CreateComment
