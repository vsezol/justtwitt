import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getComments,
  addComment,
  closeComments
} from '../../../store/actions/commentsActionCreators'

import classes from './Comments.module.sass'

import Comment from '../../func/Comment/Comment'
import { Container } from 'react-bootstrap'

import CreateComment from '../CreateComment/CreateComment'

class Comments extends Component {
  state = {
    isMyComment: false,
    isScrollNeeded: false
  }

  commentsRef = React.createRef()

  componentDidMount() {
    const tredId = this.props.match.params.id
    this.props.getComments(tredId)
  }

  componentWillUnmount() {
    this.props.closeComments()
  }

  componentDidUpdate(prevProps, prevState) {
    const prevComments = prevProps.comments
    const currComments = this.props.comments

    if (this.state.isMyComment && prevComments.length < currComments.length) {
      this.scrollToMessagesEnd()
      this.setState(() => ({ isMyComment: false }))
    } else if (
      !this.checkUserOnEnd(100) &&
      prevComments.length < currComments.length
    ) {
      this.setState(() => ({ isScrollNeeded: true }))
    } else if (
      this.checkUserOnEnd(100) &&
      prevComments.length < currComments.length
    ) {
      this.scrollToMessagesEnd()
      this.setState(() => ({ isScrollNeeded: false }))
    }
  }

  checkUserOnEnd(maxHeight) {
    const commentsBlock = this.commentsRef.current
    if (!!commentsBlock) {
      const scrollHeight = commentsBlock.scrollHeight
      const scrollTop = commentsBlock.scrollTop
      const height = window.innerHeight * 0.7
      return Math.abs(scrollHeight - scrollTop - height) < maxHeight
    }
  }

  scrollToMessagesEnd = () => {
    const commentsBlock = this.commentsRef.current
    if (!!commentsBlock) {
      const height = commentsBlock.scrollHeight
      commentsBlock.scrollTop = height
      this.setState(() => ({ isScrollNeeded: false }))
    }
  }

  scrollHandler = () => {
    if (this.checkUserOnEnd(100)) {
      this.setState(() => ({ isScrollNeeded: false }))
    } else {
      this.setState(() => ({ isScrollNeeded: true }))
    }
  }

  renderComments = () => {
    const comments = this.props.comments
    const len = Object.keys(comments).length
    return comments.map((comment, index) => (
      <Comment
        id={index}
        index={index}
        key={index}
        len={len}
        text={comment.text}
      />
    ))
  }

  addCommentHamdler = text => {
    this.props.addComment(this.props.tredId, text)
    this.setState(() => ({ isMyComment: true }))
  }

  render() {
    const ContainerClasses = [classes.Container, 'p-4 rounded mb-2'].join(' ')
    return (
      <>
        {!this.props.loading && (
          <Container>
            <div className={classes.Comments__ScrollBtnBlock}>
              {this.state.isScrollNeeded && (
                <i
                  className={
                    classes.Comments__ScrollBtn + ' fas fa-chevron-circle-down'
                  }
                  onClick={this.scrollToMessagesEnd}
                ></i>
              )}
            </div>

            {!this.props.error && this.props.comments.length > 0 && (
              <div
                className={ContainerClasses + ' ' + classes.Comments}
                ref={this.commentsRef}
                onScroll={this.scrollHandler}
              >
                {this.renderComments()}
              </div>
            )}

            <div className={ContainerClasses}>
              <CreateComment onSubmit={this.addCommentHamdler} />
            </div>
          </Container>
        )}
      </>
    )
  }
}

const mapStateToProps = state => ({
  tredId: state.comments.tredId,
  comments: state.comments.comments,
  loading: state.comments.loading,
  error: state.comments.error
})

const mapDispatchToProps = dispatch => ({
  getComments: tredId => dispatch(getComments(tredId)),
  addComment: (tredId, text) => dispatch(addComment(tredId, text)),
  closeComments: () => dispatch(closeComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
