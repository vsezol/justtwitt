import React from 'react'
import classes from './PhotoGallery.module.sass'
import { Image } from 'react-bootstrap'

const PhotoGallery = props => {
  return (
    <div className={classes.PhotoGallery + ' d-flex flex-wrap justify-content-center'}>
      {props.imgs.map((imgSrc, key) => (
        <div key={key} className={classes.PhotoGallery__Item + ' p-1'}>
          <Image key={key} src={imgSrc} className={classes.PhotoGallery__Image} rounded />
        </div>
      ))}
    </div>
  )
}

export default PhotoGallery
