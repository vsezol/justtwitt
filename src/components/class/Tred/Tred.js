// react
import React, { Component } from 'react'
import propTypes from 'prop-types'

// redux
import { connect } from 'react-redux'
import { getTred } from '../../../store/actions/tredActionCreators'

import Container from '../../../hoc/Container/Container'
import { Tred as TredContainer, Title, Text } from './styledComponents'

// components
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PhotoGallery from '../../func/PhotoGallery/PhotoGallery'
import Stats from '../../UI/Stats/Stats'

// styles
// import classes from './Tred.module.sass'

import replaceNlToBr from '../../../modules/replaceNlToBr/replaceNlToBr'

// main component
class Tred extends Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getTred(id)
  }

  renderTred = () => {
    return (
      <div style={{ marginTop: 10 }}>
        <TredContainer>
          <Title>{this.props.title}</Title>
          <Stats
            views={this.props.views}
            board={this.props.board}
            date={this.props.date}
          />
        </TredContainer>

        <TredContainer>
          <Text>{replaceNlToBr(this.props.text)}</Text>
        </TredContainer>

        <TredContainer>
          <PhotoGallery imgs={this.props.imgs} />
        </TredContainer>
      </div>
    )
  }

  render() {
    return (
      <Container>
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
