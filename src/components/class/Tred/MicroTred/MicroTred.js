import React from 'react'
import classes from './MicroTred.module.sass'
import { Link } from 'react-router-dom'

const MicroTred = props => {
  return (
    <div className={classes.Tred + ' mb-4 p-4 rounded'}>
      <h2 className={classes.Tred__Title + ' mb-2'}>{props.tred.title}</h2>
      <div className={classes.Tred__Text + ' mb-2'}>{props.tred.text}</div>
      <div
        className={
          classes.Tred__Stats +
          ' d-flex w-100 justify-content-start align-items-center flex-wrap justify-content-md-end flex-md-row-reverse'
        }
      >
        <div className='d-flex flex-wrap mb-2  mb-sm-0'>
          <span className={classes.Tred__Stats__Views + ' mr-2'}>
            <strong>views:</strong>&nbsp;{props.tred.views}
          </span>
          <span className={classes.Tred__Stats__Id + ' mr-2'}>
            <strong>id:</strong>&nbsp;{props.tred.id}
          </span>
          <span className={classes.Tred__Stats__Date + ' mr-2'}>
            <strong>date:</strong>&nbsp;{props.tred.date}
          </span>
        </div>
        <Link
          to='/private'
          className={classes.Tred__ReadMore + ' mr-md-auto btn btn-primary'}
        >
          Read more
        </Link>
      </div>
    </div>
  )
}

export default MicroTred
