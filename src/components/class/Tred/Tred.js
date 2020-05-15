import React, { Component } from 'react'

import { connect } from 'react-redux'

import { getTred } from '../../../store/actions/tredActionCreators'

import axios from 'axios'

class Tred extends Component {

  componentDidMount() {
    const {board, id} = this.props.match.params
    this.props.getTred(board, id)
  }
  

  render() {
    return (
      <div>
        {this.props.match.params.board} {this.props.match.params.id}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.tred.loading,
  date: state.tred.date,
  views: state.tred.views,
  title: state.tred.title,
  text: state.tred.text,
  comments: state.tred.comments,
  imgs: state.tred.imgs,
  error: state.tred.error
})

const mapDispatchToProps = dispatch => ({
  getTred: (board, id) => dispatch(getTred(board, id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tred)
