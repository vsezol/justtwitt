import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Container, Media } from 'react-bootstrap'

import { getTred } from '../../../store/actions/tredActionCreators'

import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PhotoGallery from '../PhotoGallery/PhotoGallery'
import Comment from '../../func/Comment/Comment'

import classes from './Tred.module.sass'

class Tred extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.getTred(id)
  }

  renderTred = () => {
    return (
      <div className={classes.Tred}>
        {/* tred title */}
        <div className={classes.Tred__Container + ' p-4 rounded mb-2'}>
          <h1 className={classes.Tred__Title}>{this.props.title}</h1>
        </div>

        {/* tred text */}
        <div className={classes.Tred__Container + ' p-4 rounded mb-2'}>
          <p className={classes.Tred__Text + ' m-0'}>{this.props.text}</p>
        </div>

        {/* tred gallery */}
        <div className={classes.Tred__Container + ' p-4 rounded mb-2'}>
          <PhotoGallery imgs={this.props.imgs} />
        </div>

        {/* tred comments */}
        <div className={classes.Tred__Container + ' p-4 rounded mb-2'}>
          {this.props.comments.map((comment, key) => (
            <Comment
              len={this.props.comments.length}
              id={comment.id}
              text={comment.text}
              key={key}
            />
          ))}
        </div>

        <div className={classes.CreateComment}>

        </div>
      </div>
    )
  }

  render() {
    return (
      <Container className='mt-4 mb-4 pt-4'>
        {this.props.loading ? <LoaderContainer /> : this.renderTred()}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.tred.loading,
  id: state.tred.id,
  board: state.tred.board,
  date: state.tred.date,
  views: state.tred.views,
  title: state.tred.title,
  text: state.tred.text,
  comments: state.tred.comments,
  imgs: state.tred.imgs,
  error: state.tred.error
})

const mapDispatchToProps = dispatch => ({
  getTred: id => dispatch(getTred(id))
})

Tred.propTypes = {
  loading: propTypes.bool,
  id: propTypes.string,
  board: propTypes.string,
  date: propTypes.string,
  views: propTypes.number,
  title: propTypes.string,
  text: propTypes.string,
  comments: propTypes.array,
  imgs: propTypes.array,
  error: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Tred)

/* 
<div className='mb-2'>
  <h2 className={classes.Tred__GalleryTitle}>Pictures</h2>
</div> 
*/
