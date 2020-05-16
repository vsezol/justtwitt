import React, { Component } from 'react'
import { connect } from 'react-redux'
import propTypes from 'prop-types'
import { Container } from 'react-bootstrap'

import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import { getTred } from '../../../store/actions/tredActionCreators'

class Tred extends Component {
  async componentDidMount() {
    const id = this.props.match.params.id
    this.props.getTred(id)
  }

  renderTred = () => (
    <Container>
      <h1>{this.props.title}</h1>
      <p>{this.props.text}</p>
      <p>{this.props.board}</p>
      <p>{this.props.views}</p>
      {/* {this.props.comments.map(comment => (
        <p>{comment}</p>
      ))} */}
    </Container>
  )

  render() {
    return (
      <div>{this.props.loading ? <LoaderContainer /> : this.renderTred()}</div>
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
