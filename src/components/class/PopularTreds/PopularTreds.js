import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getPopularTreds } from '../../../store/actions/popularTredsActionCreators'

import Container from '../../../hoc/Container/Container'
import MicroTred from '../Tred/MicroTred/MicroTred'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: 'Roboto-Regular';
  font-size: 1.6rem;
  color: ${({theme}) => theme.textColor};
  margin: 15px 0px 25px 0px;
  padding: 0px;
`

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
        <Title>Популярные треды</Title>
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
