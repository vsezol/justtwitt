import React from 'react'
import classes from './Stats.module.sass'

const Stats = props => {
  
  const spanClasses = [classes.Span, 'mr-2'].join(' ')

  return (
    <>
      <span className={spanClasses}>
        <strong>
          <i className='fas fa-eye'></i>
        </strong>
        &nbsp;{props.views}
      </span>
      <span className={spanClasses}>
        <strong>
          <i className='fab fa-flipboard'></i>
        </strong>
        &nbsp;{props.board}
      </span>
      <span className={spanClasses}>
        <strong>
          <i className='fas fa-clock'></i>
        </strong>
        &nbsp;{props.date}
      </span>
    </>
  )
}

export default Stats
