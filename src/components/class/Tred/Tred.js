// react
import React, { Component } from 'react'
import propTypes from 'prop-types'

// redux
import { connect } from 'react-redux'
import { getTred } from '../../../store/actions/tredActionCreators'

import Container from '../../../hoc/Container/Container'
// import { Container } from 'react-bootstrap'

// components
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PhotoGallery from '../../func/PhotoGallery/PhotoGallery'
import Stats from '../../UI/Stats/Stats'

// styles
import classes from './Tred.module.sass'

import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'

// main component
class Tred extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getTred(id)
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
          <div className='pb-1 pb-md-0'>
            <h1 className={classes.Tred__Title}>{this.props.title}</h1>
          </div>

          <div className='d-flex flex-wrap pb-1 pb-md-0'>
            <Stats
              views={this.props.views}
              board={this.props.board}
              date={this.props.date}
            />
          </div>
        </div>

        {/* tred text */}
        <div className={tredContainerClasses}>
          <p className={classes.Tred__Text + ' m-0'}>
            {replaceNlToBr(this.props.text)}
          </p>
        </div>

        {/* tred gallery */}
        <div className={tredContainerClasses}>
          <PhotoGallery imgs={this.props.imgs} />
        </div>
      </div>
    )
  }

  render() {
    return (
      <Container className='mt-4 pt-4'>
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
  imgs: propTypes.array,
  error: propTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Tred)
