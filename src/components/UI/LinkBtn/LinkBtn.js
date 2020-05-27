import React from 'react'
import { Link } from 'react-router-dom'
import classes from './LinkBtn.module.sass'

const LinkBtn = ({ to, children }) => {
  return (
    <Link to={to} className={classes.LinkBtn + ' p-2 text-center rounded'}>
      {children}
    </Link>
  )
}

export default LinkBtn
