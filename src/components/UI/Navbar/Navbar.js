import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.sass'

const Navbar = () => {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.LinksContainer}>
        <NavLink to="/" className={classes.Navbar__link}>
          <i class="fas fa-fire-alt"></i>
        </NavLink>
        <NavLink to="/public" className={classes.Navbar__link}>
          <i class="fas fa-rss-square"></i>
        </NavLink>
        <NavLink to="/private" className={classes.Navbar__link}>
          <i class="fas fa-lock"></i>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
