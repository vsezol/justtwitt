import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getPopularTreds } from '../../../store/actions/popularTredsActionCreators'

import Container from '../../../hoc/Container/Container'
import MicroTred from '../../class/Tred/MicroTred/MicroTred'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import PageTitle from '../../UI/PageTitle/PageTitle'

class PopularTreds extends Component {
  componentDidMount = async () => this.props.getPopularTreds()

  renderTreds = treds => {
    return treds.map((tred, index) => {
      const id = tred[0]
      const data = tred[1]
      return <MicroTred key={index} tred={{ id, ...data }} />
    })
  }

  render() {
    return (
      <Container>
        <PageTitle>Популярные треды</PageTitle>
        {this.props.loading ? (
          <LoaderContainer />
        ) : (
          this.renderTreds(this.props.treds)
        )}
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
