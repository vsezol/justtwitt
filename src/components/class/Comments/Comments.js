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

import CreateComment from '../../func/CreateComment/CreateComment'

class Comments extends Component {
  componentDidMount() {
    const tredId = this.props.match.params.id
    this.props.getComments(tredId)
  }

  componentWillUnmount() {
    this.props.closeComments()
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

  addCommentHamdler(text) {
    this.props.addComment(this.props.tredId, text)
  }

  render() {
    const ContainerClasses = [classes.Container, 'p-4 rounded mb-2'].join(' ')
    return (
      <>
        {!this.props.loading && (
          <Container>
            {!this.props.error && this.props.comments.length > 0 && (
              <div className={ContainerClasses + ' ' + classes.Comments}>{this.renderComments()}</div>
            )}
            <div className={ContainerClasses}>
              <CreateComment onSubmit={this.addCommentHamdler.bind(this)} />
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
