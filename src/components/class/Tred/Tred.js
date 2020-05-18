import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Container, Button, Modal } from 'react-bootstrap'

import { getTred } from '../../../store/actions/tredActionCreators'

import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PhotoGallery from '../PhotoGallery/PhotoGallery'
import Comment from '../../func/Comment/Comment'
import Stats from '../../func/Stats/Stats'

import classes from './Tred.module.sass'

class Tred extends Component {
  state = { isAddComment: false }

  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.getTred(id)
  }

  openModalCreateComment() {
    this.setState(() => ({ isAddComment: true }))
  }

  renderTred = () => {
    // классы для контейнеров в треде
    const tredContainerClasses = [
      classes.Tred__Container,
      'p-4 rounded mb-2'
    ].join(' ')

    return (
      <div className={classes.Tred}>
        {/* tred title */}
        <div
          className={
            tredContainerClasses +
            ' d-flex justify-content-between flex-wrap align-items-center'
          }
        >
          <div className='pb-1'>
            <h1 className={classes.Tred__Title}>{this.props.title}</h1>
          </div>

          <div className='d-flex flex-wrap pb-1'>
            <Stats
              views={this.props.views}
              board={this.props.board}
              date={this.props.date}
            />
          </div>
        </div>

        {/* tred text */}
        <div className={tredContainerClasses}>
          <p className={classes.Tred__Text + ' m-0'}>{this.props.text}</p>
        </div>

        {/* tred gallery */}
        <div className={tredContainerClasses}>
          <PhotoGallery imgs={this.props.imgs} />
        </div>

        {/* tred comments */}
        <div className={tredContainerClasses}>
          <div className={classes.Tred__Comments}>
            {this.props.comments.map((comment, key) => (
              <Comment
                len={this.props.comments.length}
                id={comment.id}
                text={comment.text}
                key={key}
              />
            ))}
          </div>
          <div className='d-flex justify-content-center'>
            <Button
              className={classes.Tred__AddCommentBtn}
              variant='primary'
              onClick={this.openModalCreateComment.bind(this)}
            >
              <i className='fas fa-plus-circle'></i>
            </Button>
          </div>
        </div>
      </div>
    )
  }
  
  render() {
    return (
      <Container className='mt-4 mb-4 pt-4'>
        {this.props.loading ? <LoaderContainer /> : this.renderTred()}
        {this.state.isAddComment ? <h1>Add comment</h1> : null}
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
