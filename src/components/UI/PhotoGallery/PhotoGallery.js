import React, { Component } from 'react'
import classes from './PhotoGallery.module.sass'
import { Image } from 'react-bootstrap'

class PhotoGallery extends Component {
  state = {
    isModal: false,
    modalImageSrc: null
  }

  onOpenImage(event) {
    const src = event.target.src
    this.setState(() => ({
      isModal: true,
      modalImageSrc: src
    }))
  }

  onCloseImage() {
    console.log('click')
    this.setState(() => ({
      isModal: false,
      modalImageSrc: null
    }))
  }

  renderModalImage() {
    return (
      <div
        className={classes.ModalOverlay}
        onClick={this.onCloseImage.bind(this)}
      >
        <div className={classes.ModalOverlay__Wrapper}>
          <Image
            className={classes.ModalOverlay__Wrapper__Image}
            src={this.state.modalImageSrc}
          />
        </div>
      </div>
    )
  }

  render() {
    return (
      <div
        className={
          classes.PhotoGallery +
          ' w-100 d-flex flex-wrap justify-content-center'
        }
      >
        {this.state.isModal ? this.renderModalImage() : null}
        {this.props.imgs.map((imgSrc, key) => (
          <div key={key} className={classes.PhotoGallery__Item + ' p-1'}>
            <Image
              key={key}
              src={imgSrc}
              className={classes.PhotoGallery__Image}
              onClick={this.onOpenImage.bind(this)}
              rounded
            />
          </div>
        ))}
      </div>
    )
  }
}

export default PhotoGallery

// import React from 'react'
// import classes from './PhotoGallery.module.sass'
// import { Image } from 'react-bootstrap'

// const PhotoGallery = props => {

// return (
//   <div className={classes.PhotoGallery + ' w-100 d-flex flex-wrap justify-content-center'}>
//     {props.imgs.map((imgSrc, key) => (
//       <div key={key} className={classes.PhotoGallery__Item + ' p-1'}>
//         <Image key={key} src={imgSrc} className={classes.PhotoGallery__Image} rounded />
//       </div>
//     ))}
//   </div>
// )
// }

// export default PhotoGallery
