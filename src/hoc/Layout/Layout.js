import React, { Component } from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'

class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <main>{this.props.children}</main>
      </>
    )
  }
}

export default Layout
