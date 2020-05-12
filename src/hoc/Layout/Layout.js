import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <nav>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        <main>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
