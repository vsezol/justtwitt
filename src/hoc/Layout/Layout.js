import React from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'
import classes from './Layout.module.sass'

const Layout = props => {
  return (
    <div className='App'>
      <Navbar />
      <main className={classes.Main}>{props.children}</main>
    </div>
  )
}

export default Layout
