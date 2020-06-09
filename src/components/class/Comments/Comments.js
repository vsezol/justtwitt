import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  getComments,
  addComment,
  closeComments
} from '../../../store/actions/commentsActionCreators'

import Comment from '../../func/Comment/Comment'
import TredContainer from '../../UI/TredContainer/TredContainer'
import CreateComment from '../CreateComment/CreateComment'

import styled from 'styled-components'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

import defAvatar from './defAv.svg'

const CommentsBlock = styled(TredContainer)`
  max-height: 65vh;
  height: auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 50px;
    background: ${({ theme }) => theme.scrollColor};
  }
`

const ScrollBtnBlock = styled.div`
  position: relative;
`

const ScrollBtn = styled(Icon)`
  position: absolute;
  font-size: 2.1rem;
  cursor: pointer;
  bottom: 20px;
  left: calc(100% - 2.1rem - 10px);
  transition: color 0.25s;
  color: ${({ theme }) => theme.scrollColor};
`

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
      const height = window.innerHeight * 0.65
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

  checkCommentHeight = () => {
    const commentsBlock = this.commentsRef.current
    if (!!commentsBlock) {
      const height = commentsBlock.scrollHeight
      return height > window.innerHeight * 0.65
    } else {
      return false
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
        avatarSrc={defAvatar}
        text={comment.text}
      />
    ))
  }

  addCommentHamdler = text => {
    this.props.addComment(this.props.tredId, text)
    this.setState(() => ({ isMyComment: true }))
  }

  render() {
    return (
      <>
        {!this.props.loading && (
          <div>
            {!this.props.error && this.props.comments.length > 0 && (
              <CommentsBlock
                ref={this.commentsRef}
                onScroll={this.scrollHandler}
              >
                {this.renderComments()}
              </CommentsBlock>
            )}
            <ScrollBtnBlock>
              {this.checkCommentHeight() && this.state.isScrollNeeded && (
                <ScrollBtn
                  icon={faChevronCircleDown}
                  onClick={this.scrollToMessagesEnd}
                ></ScrollBtn>
              )}
            </ScrollBtnBlock>
            <TredContainer padding='5px 0px 5px 5px' style={{ margin: 0 }}>
              <CreateComment onSubmit={this.addCommentHamdler} />
            </TredContainer>
          </div>
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
