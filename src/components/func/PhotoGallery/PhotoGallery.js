import React, { useState } from 'react'
import classes from './PhotoGallery.module.sass'
import { Image } from 'react-bootstrap'

const spliceImgs = (imgs, count) => [...imgs].splice(0, count)

const renderGallery = (imgs, openImg) => {
  return imgs.map((imgSrc, key) => (
    <div key={key} className={classes.PhotoGallery__Item + ' p-1'}>
      <Image
        index={key}
        src={imgSrc}
        className={classes.PhotoGallery__Item__Image}
        onClick={e => openImg(e)}
        rounded
      />
    </div>
  ))
}

const renderMoreImages = (hiddenCount, galleryMode, switchGallery) => {
  const plusStyles = ['fas fa-plus-circle', classes.MoreImages]
  const countStyles = [classes.PhotoGallery__Item__Image_Fake__Count, 'ml-1']

  if (galleryMode) {
    plusStyles.push(classes.MoreImages_Active)
    countStyles.push('d-none')
  }

  return (
    <>
      {hiddenCount > 0 && (
        <div
          className={classes.PhotoGallery__Item + ' p-1'}
          onClick={() => switchGallery(galleryMode)}
        >
          <div className={classes.PhotoGallery__Item__Image_Fake + ' rounded'}>
            <i className={plusStyles.join(' ')}></i>
            <span className={countStyles.join(' ')}>{hiddenCount}</span>
          </div>
        </div>
      )}
    </>
  )
}

const renderModalImage = (closeImg, imgSrc) => {
  return (
    <div className={classes.ModalOverlay} onClick={() => closeImg()}>
      <i className={classes.ModalOverlay__Close + ' fas fa-times'}></i>
      <div className={classes.ModalOverlay__Wrapper}>
        <Image className={classes.ModalOverlay__Wrapper__Image} src={imgSrc} />
      </div>
    </div>
  )
}

const PhotoGallery = props => {
  const defaultCount = 3
  const visibleCount = props.imgs.length
  const hiddenCount = visibleCount - defaultCount

  const [galleryMode, setGalleryMode] = useState(false)
  const [imgs, setImgs] = useState(spliceImgs(props.imgs, defaultCount))
  const [showMode, setShowMode] = useState(false)
  const [imgSrc, setImgSrc] = useState(null)

  const switchGallery = galleryMode => {
    if (!galleryMode) {
      setImgs(props.imgs)
      setGalleryMode(true)
    } else {
      setImgs(spliceImgs(props.imgs, defaultCount))
      setGalleryMode(false)
    }
  }

  const openImg = event => {
    setShowMode(true)
    setImgSrc(event.target.src)
  }

  const closeImg = () => {
    setShowMode(false)
    setImgSrc(null)
  }

  return (
    <div
      className={
        classes.PhotoGallery + ' w-100 d-flex flex-wrap justify-content-center'
      }
    >
      {showMode && renderModalImage(closeImg, imgSrc)}
      {renderGallery(imgs, openImg)}
      {renderMoreImages(hiddenCount, galleryMode, switchGallery)}
    </div>
  )
}

export default PhotoGallery
