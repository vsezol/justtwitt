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
          ' d-inline-flex w-100 justify-content-end align-items-center'
        }
      >
        <button className={classes.Tred__ReadMore + ' btn btn-primary mr-auto'}>
          <Link to='/private'>Read more</Link>
        </button>
        <span className={classes.Tred__Stats__Views + ' mr-2'}>
          views: {props.tred.views}
        </span>
        <span className={classes.Tred__Stats__Id + ' mr-2'}>
          id: {props.tred.id}
        </span>
        <span className={classes.Tred__Stats__Date + ' mr-2'}>
          date: {props.tred.date.toDateString()}
        </span>
      </div>
    </div>
  )
}

export default MicroTred
