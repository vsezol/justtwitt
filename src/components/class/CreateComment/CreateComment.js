import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import classes from './CreateComment.module.sass'
import TextareaAutosize from 'react-textarea-autosize'

const CreateComment = props => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        className={classes.Button_Blue}
        variant='primary'
        onClick={handleShow}
      >
        <i className='fas fa-plus-circle'></i>
      </Button>

      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Body className='pt-4 pb-2 pr-4 pl-4'>
          <TextareaAutosize
            className={
              classes.Modal__TextArea + ' border-0 rounded-0 w-100 textarea'
            }
          />
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-between border-0 pt-0 pb-4 pr-4 pl-4'>
          <Button
            variant='danger'
            className={classes.Button_Red + ' m-0'}
            onClick={handleClose}
          >
            <i className='fas fa-times-circle'></i>
          </Button>
          <Button
            variant='primary'
            className={classes.Button_Blue + ' m-0'}
            onClick={handleClose}
          >
            <i className='fas fa-plus-circle'></i>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default CreateComment
