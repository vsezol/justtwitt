import React from 'react'
import classes from './LoaderContainer.module.sass'
import Loader from '../Loader/Loader'

const LoaderContainer = () => {
  return (
    <div className={classes.LoaderContainer}>
      <Loader />
    </div>
  )
}

export default LoaderContainer
