import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Container } from 'react-bootstrap'

import { getTred } from '../../../store/actions/tredActionCreators'

import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PhotoGallery from '../PhotoGallery/PhotoGallery'
import classes from './Tred.module.sass'

class Tred extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.getTred(id)
  }

  renderTred = () => {
    return (
      <div className={classes.Tred + ' p-4 rounded'}>
        <div className='mb-2'>
          <h1 className={classes.Tred__Title}>{this.props.title}</h1>
        </div>
        <div className='mb-2'>
          <p className={classes.Tred__Text + ' m-0'}>{this.props.text}</p>
        </div>
        <PhotoGallery imgs={this.props.imgs}/>
        {/* {this.props.comments.map((comment, key) => (
          <p key={key}>
            {comment.id} {comment.text}
          </p>
        ))}
        <p>{this.props.board}</p>
        <p>{this.props.views}</p> */}
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
