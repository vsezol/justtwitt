import React, { Component } from 'react'
import classes from './PhotoGallery.module.sass'
import { Image } from 'react-bootstrap'

class PhotoGallery extends Component {
  state = {
    isModal: false,
    modalImageSrc: null,
    isFullGallery: false,
    defaultImgsCount: 3
  }

  onOpenImage(event) {
    const src = event.target.src
    this.setState(() => ({
      isModal: true,
      modalImageSrc: src
    }))
  }

  onCloseImage() {
    this.setState(() => ({
      isModal: false,
      modalImageSrc: null
    }))
  }

  renderModalImage() {
    return (
      <div className={classes.ModalOverlay} onClick={() => this.onCloseImage()}>
        <i className={classes.ModalOverlay__Close + ' fas fa-times'}></i>
        <div className={classes.ModalOverlay__Wrapper}>
          <Image
            className={classes.ModalOverlay__Wrapper__Image}
            src={this.state.modalImageSrc}
          />
        </div>
      </div>
    )
  }

  renderGallery(imgs, count) {
    return [...imgs].splice(0, count).map((imgSrc, key) => (
      <div key={key} className={classes.PhotoGallery__Item + ' p-1'}>
        <Image
          index={key}
          src={imgSrc}
          className={classes.PhotoGallery__Item__Image}
          onClick={e => this.onOpenImage(e)}
          rounded
        />
      </div>
    ))
  }

  onClickMoreImages() {
    this.setState((state) => ({
      isFullGallery: !state.isFullGallery
    }))
  }

  renderMoreImages() {
    const plusStyles = ['fas fa-plus-circle', classes.MoreImages]
    const countStyles = [classes.PhotoGallery__Item__Image_Fake__Count]
    if (this.state.isFullGallery) {
      plusStyles.push(classes.MoreImages_Active)
      countStyles.push('d-none')
    }

    return (
      <div className={classes.PhotoGallery__Item + ' p-1'} onClick={() => this.onClickMoreImages()}>
        <div className={classes.PhotoGallery__Item__Image_Fake + ' rounded'}>
          <i className={plusStyles.join(' ')}></i>
          
          <span
            className={countStyles.join(' ') + ' ml-1'}
          >
            {this.props.imgs.length - this.state.defaultImgsCount}
          </span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={classes.PhotoGallery + ' w-100 d-flex flex-wrap justify-content-center'}>
        {this.state.isModal ? this.renderModalImage() : null}
        {!this.state.isFullGallery
          ? this.renderGallery(this.props.imgs, this.state.defaultImgsCount)
          : this.renderGallery(this.props.imgs, this.props.imgs.length)}
        {this.renderMoreImages()}
      </div>
    )
  }
}

export default PhotoGallery
