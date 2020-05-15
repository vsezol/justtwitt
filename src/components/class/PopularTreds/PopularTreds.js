import React, { Component } from 'react'
import classes from './PopularTreds.module.sass'
import { Container } from 'react-bootstrap'
import MicroTred from '../Tred/MicroTred/MicroTred'
import Loader from '../../UI/Loader/Loader'

import { connect } from 'react-redux'

import { getPopularTreds } from '../../../store/actions/popularTredsActionCreators'

import axios from 'axios'

class PopularTreds extends Component {
  async componentDidMount() {
    this.props.getPopularTreds()
  }

  renderTreds = () => {
    console.log(this.props.popularTreds)
    // const rendered = Object.keys(treds).map(key => <MicroTred key={key} tred={treds[key]} />)
    // console.log(rendered)
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
            <div className={classes.LoaderContainer}>
              <Loader />
            </div>
          ) : (
            this.renderTreds(this.props.popularTreds)
          )}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.popularTreds.loading,
  popularTreds: state.popularTreds.treds
})

const mapDispatchToProps = dispatch => ({
  getPopularTreds: () => dispatch(getPopularTreds())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopularTreds)


// class PopularTreds extends Component {
//   state = {
//     loading: true,
//     popularTreds: null
//   }

//   async componentDidMount() {
//     const response = await axios.get(
//       'https://justtwitt-a5e19.firebaseio.com/treds/popular.json'
//     )
//     const popularTreds = response.data
//     this.setState(() => ({
//       loading: false,
//       popularTreds
//     }))
//   }

//   renderTreds = treds =>
//     Object.keys(treds).map(key => <MicroTred key={key} tred={treds[key]} />)

//   render() {
//     return (
//       <div className={classes.PopularTreds}>
//         <Container>
//           <div className='pt-4 pb-4'>
//             <h1 className={classes.PopularTreds__Title + ' m-0'}>
//               Популярные треды
//             </h1>
//           </div>
//           {this.state.loading ? (
//             <div className={classes.LoaderContainer}>
//               <Loader />
//             </div>
//           ) : (
//             this.renderTreds(this.state.popularTreds)
//           )}
//         </Container>
//       </div>
//     )
//   }
// }