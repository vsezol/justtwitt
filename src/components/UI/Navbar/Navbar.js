import React from 'react'
import { NavLink } from 'react-router-dom'
import Media from 'react-media'

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
    <nav className={classes.Navbar}>
      <div className={classes.Navbar__LinksContainer}>
        <Media queries={{ small: '(min-width: 576px)' }}>
          {matches => (
            <>
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  exact
                  to={link.to}
                  className={classes.Navbar__Link}
                  activeClassName={classes.Navbar__Link_active}
                >
                  <i className={link.iconClasses}></i>
                  {matches.small && (
                    <span className={classes.Navbar__Link__Alt}>&nbsp;{link.text}</span>
                  )}
                </NavLink>
              ))}
            </>
          )}
        </Media>
      </div>
    </nav>
  )
}

export default Navbar

// extraSmall: '(max-width: 575px)',
// small: '(max-width: 767px)',
// medium: '(max-width: 991px)',
// large: '(max-width: 1199px)',
// extraLarge: '(min-width: 1200px)',