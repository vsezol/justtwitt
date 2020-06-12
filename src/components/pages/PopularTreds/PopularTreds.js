import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getPopularTreds } from '../../../store/actions/popularTredsActionCreators'

import Container from '../../../hoc/Container/Container'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PageTitle from '../../UI/PageTitle/PageTitle'

import renderMicroTreds from '../../../modules/renderMicroTreds/renderMicroTreds'

class PopularTreds extends Component {
  componentDidMount = async () => this.props.getPopularTreds()

  render() {
    const { loading, treds } = this.props
    return (
      <Container>
        <PageTitle>Популярные треды</PageTitle>
        {loading ? <LoaderContainer /> : renderMicroTreds(treds)}
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.popularTreds.loading,
  treds: state.popularTreds.treds
})

const mapDispatchToProps = dispatch => ({
  getPopularTreds: () => dispatch(getPopularTreds())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopularTreds)
