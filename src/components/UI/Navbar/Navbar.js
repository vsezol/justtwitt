import React from 'react'
import { NavLink } from 'react-router-dom'

import classes from './Navbar.module.sass'

const Navbar = () => {
  const links = [
    {
      to: '/',
      text: 'popular',
      iconClasses: 'fas fa-fire-alt'
    },
    {
      to: '/public',
      text: 'public',
      iconClasses: 'fas fa-rss-square'
    },
    {
      to: '/private',
      text: 'private',
      iconClasses: 'fas fa-lock'
    }
  ]

  return (
    <nav className={classes.Navbar + ' fixed-top'}>
      <div className={classes.Navbar__LinksContainer}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            exact
            to={link.to}
            className={classes.Navbar__Link}
            activeClassName={classes.Navbar__Link_active}
          >
            <i className={link.iconClasses}></i>
            <span className={classes.Navbar__Link__Alt + ' d-none d-md-block'}>
              &nbsp;{link.text}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}

export default Navbar