import React, { Component } from 'react'

import { connect } from 'react-redux'
import { getPopularTreds } from '../../../store/actions/popularTredsActionCreators'

import { Container } from 'react-bootstrap'
import MicroTred from '../Tred/MicroTred/MicroTred'
import LoaderContainer from '../../UI/LoaderContainer/LoaderContainer'

import classes from './PopularTreds.module.sass'

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
      <div className={classes.PopularTreds}>
        <Container>
          <div className='pt-4 pb-4'>
            <h1 className={classes.PopularTreds__Title + ' m-0'}>
              Популярные треды
            </h1>
          </div>
          {this.props.loading ? (
            <LoaderContainer />
          ) : (
            this.renderTreds(this.props.treds)
          )}
        </Container>
      </div>
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
