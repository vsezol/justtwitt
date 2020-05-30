import React, { useState } from 'react'
import classes from './PhotoGallery.module.sass'
import {
  Item,
  Image,
  FakeImage,
  PhotoGallery,
  FakeCount
} from './styledComponents'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const PlusIcon = styled(Icon)`
  color: ${({ theme }) => theme.linkColor};
  font-size: 2.2rem;
  transition: all 0.25s ease-in-out;
  transform: ${({ active }) => (active ? 'rotate(-45deg)' : 'rotate(0deg)')};
`

const spliceImgs = (imgs, count) => [...imgs].splice(0, count)

const renderGallery = (imgs, openImg) => {
  return imgs.map((imgSrc, key) => (
    <Item key={key}>
      <Image
        as='img'
        index={key}
        src={imgSrc}
        alt=''
        onClick={e => openImg(e)}
        rounded
      />
    </Item>
  ))
}

const renderMoreImages = (hiddenCount, galleryMode, switchGallery) => {
  return (
    <>
      {hiddenCount > 0 && (
        <Item onClick={() => switchGallery(galleryMode)}>
          <FakeImage>
            <PlusIcon icon={faPlusCircle} active={galleryMode}></PlusIcon>
            {!galleryMode && <FakeCount>{hiddenCount}</FakeCount>}
          </FakeImage>
        </Item>
      )}
    </>
  )
}

const renderModalImage = (closeImg, imgSrc) => {
  return (
    <div className={classes.ModalOverlay} onClick={() => closeImg()}>
      <Icon className={classes.ModalOverlay__Close} icon={faTimes}></Icon>
      <div className={classes.ModalOverlay__Wrapper}>
        <Image className={classes.ModalOverlay__Wrapper__Image} src={imgSrc} />
      </div>
    </div>
  )
}

export default props => {
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
    <PhotoGallery>
      {showMode && renderModalImage(closeImg, imgSrc)}
      {renderGallery(imgs, openImg)}
      {renderMoreImages(hiddenCount, galleryMode, switchGallery)}
    </PhotoGallery>
  )
}
