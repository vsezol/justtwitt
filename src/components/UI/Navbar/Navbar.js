import React from 'react'
import { NavLink } from 'react-router-dom'
import Media from 'react-media'

import classes from './Navbar.module.sass'

const Navbar = () => {
  const links = [
    {
      to: '/',
      text: 'popular',
      iconClass: 'fa-fire-alt'
    },
    {
      to: '/public',
      text: 'public',
      iconClass: 'fa-rss-square'
    },
    {
      to: '/private',
      text: 'private',
      iconClass: 'fa-lock'
    }
  ]

  return (
    <nav className={classes['navbar']}>
      <div className={classes['links-container']}>
        <Media queries={{ small: '(min-width: 576px)' }}>
          {matches => (
            <>
              {links.map((link, index) => (
                <NavLink
                  key={index}
                  exact
                  to={link.to}
                  className={classes['navbar__link']}
                  activeClassName={classes['navbar__link_active']}
                >
                  <i className={'fas ' + link.iconClass}></i>
                  {matches.small && (
                    <span className='navbar__link__alt'>&nbsp;{link.text}</span>
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
