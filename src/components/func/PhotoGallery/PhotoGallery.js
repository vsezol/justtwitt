import React, { useState } from 'react'
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
  transform: ${({ active }) => (!!active ? 'rotate(-45deg)' : 'rotate(0deg)')};
`

const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
`

const ModalOverlayWrapper = styled.div`
  max-height: 90%;
  height: 90%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalClose = styled(Icon)`
  position: absolute;
  top: 5px;
  right: 10px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`

const ModalImage = styled.img`
  cursor: pointer;
  width: 100%;
  max-height: 100%;
  object-fit: scale-down;
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
            <PlusIcon
              icon={faPlusCircle}
              active={galleryMode ? '1' : ''}
            ></PlusIcon>
            {!galleryMode && <FakeCount>{hiddenCount}</FakeCount>}
          </FakeImage>
        </Item>
      )}
    </>
  )
}

const renderModalImage = (closeImg, imgSrc) => {
  return (
    <ModalOverlay onClick={() => closeImg()}>
      <ModalClose icon={faTimes}></ModalClose>
      <ModalOverlayWrapper>
        <ModalImage src={imgSrc} />
      </ModalOverlayWrapper>
    </ModalOverlay>
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
