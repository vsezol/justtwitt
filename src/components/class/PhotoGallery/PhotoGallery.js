import React, { Component } from 'react'
import classes from './PhotoGallery.module.sass'
import { Image } from 'react-bootstrap'

class PhotoGallery extends Component {
  state = {
    // состояние модального окна неактив/актив
    isModal: false,
    // src модального окна
    modalImageSrc: null,
    // состояние галлереи скрыта/раскрыта
    isFullGallery: false,
    // дефолтное кол-во изображений для нераскрытой галлереи
    defaultCount: 3
  }

  // при нажатии на изображение сообщает, что модальное окно активно
  onOpenImage(event) {
    const src = event.target.src
    this.setState(() => ({
      isModal: true,
      modalImageSrc: src
    }))
  }

  // при нажатии на любую часть модального окна делает его неактивным
  onCloseImage() {
    this.setState(() => ({
      isModal: false,
      modalImageSrc: null
    }))
  }

  // рендерит модальное окно
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

  // рендерит галлерею
  renderGallery(imgs) {
    return imgs.map((imgSrc, key) => (
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

  // при нажатии на кнопку + раскрывает галлерею
  onClickMoreImages() {
    this.setState(state => ({
      isFullGallery: !state.isFullGallery
    }))
  }

  // рендерит кнопку +
  renderMoreImages(hiddenCount) {
    const plusStyles = ['fas fa-plus-circle', classes.MoreImages]
    const countStyles = [classes.PhotoGallery__Item__Image_Fake__Count, 'ml-1']
    if (this.state.isFullGallery) {
      plusStyles.push(classes.MoreImages_Active)
      countStyles.push('d-none')
    }

    return (
      <div
        className={classes.PhotoGallery__Item + ' p-1'}
        onClick={() => this.onClickMoreImages()}
      >
        <div className={classes.PhotoGallery__Item__Image_Fake + ' rounded'}>
          <i className={plusStyles.join(' ')}></i>
          <span className={countStyles.join(' ')}>{hiddenCount}</span>
        </div>
      </div>
    )
  }

  // основной рендер компонента
  render() {
    let imgs = this.props.imgs
    const visibleCount = this.state.defaultCount
    const hiddenCount = imgs.length - visibleCount

    if (!this.state.isFullGallery) imgs = [...imgs].splice(0, visibleCount)

    return (
      <div
        className={
          classes.PhotoGallery +
          ' w-100 d-flex flex-wrap justify-content-center'
        }
      >
        {this.state.isModal ? this.renderModalImage() : null}
        {this.renderGallery(imgs)}
        {this.renderMoreImages(hiddenCount)}
      </div>
    )
  }
}

export default PhotoGallery
