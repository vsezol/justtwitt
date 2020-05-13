import React, { Component } from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
