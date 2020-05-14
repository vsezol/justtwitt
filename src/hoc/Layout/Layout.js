import React, { Component } from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'
import classes from './Layout.module.sass'

class Layout extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className={classes.Main}>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
