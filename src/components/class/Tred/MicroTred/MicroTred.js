import React from 'react'
import classes from './MicroTred.module.sass'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const MicroTred = props => {
  return (
    <div className={classes.Tred + ' mb-4 p-4 rounded'}>
      <h2 className={classes.Tred__Title + ' mb-2'}>{props.tred.title}</h2>
      <div className={classes.Tred__Text + ' mb-2'}>{props.tred.text}</div>
      <div
        className={
          classes.Tred__Stats +
          ' d-flex w-100 justify-content-start align-items-md-center flex-wrap justify-content-md-end flex-md-row-reverse'
        }
      >
        <div className='d-flex flex-wrap'>
          <span className={classes.Tred__Stats__Views + ' mr-2'}>
            views:&nbsp;{props.tred.views}
          </span>
          <span className={classes.Tred__Stats__Id + ' mr-2'}>
            id:&nbsp;{props.tred.id}
          </span>
          <span className={classes.Tred__Stats__Date + ' mr-2'}>
            date:&nbsp;{props.tred.date.toDateString()}
          </span>
        </div>
        <Button
          className={classes.Tred__ReadMore + ' mt-2 mt-sm-0 mr-md-auto'}
          variant='primary'
        >
          <Link to='/private'>Read more</Link>
        </Button>
      </div>
    </div>
  )
}

export default MicroTred
