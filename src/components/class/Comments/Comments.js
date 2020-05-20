import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getComments,
  addComment
} from '../../../store/actions/commentsActionCreators'

import classes from './Comments.module.sass'

import Comment from '../../func/Comment/Comment'
import { Container } from 'react-bootstrap'

import CreateComment from '../../func/CreateComment/CreateComment'

// import database from '../../../firebase'

class Comments extends Component {
  componentDidMount() {
    const tredId = this.props.match.params.id
    this.props.getComments(tredId)
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
    // return Object.keys(comments).map((id, index) => (
    //   <Comment
    //     id={id}
    //     index={index}
    //     key={index}
    //     len={len}
    //     text={comments[id].text}
    //   />
    // ))
  }

  addCommentHamdler(text) {
    this.props.addComment(this.props.tredId, text)
  }

  render() {
    // addComment()
    const ContainerClasses = [classes.Container, 'p-4 rounded mb-2'].join(' ')
    return (
      <>
        {!this.props.loading && (
          <Container>
            {this.props.comments && (
              <div className={ContainerClasses}>{this.renderComments()}</div>
            )}
            <div className={ContainerClasses}>
              <CreateComment onSubmit={this.addCommentHamdler.bind(this)}/>
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
  addComment: (tredId, text) => dispatch(addComment(tredId, text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)