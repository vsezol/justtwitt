import React from 'react'
import { NavLink } from 'react-router-dom'
import Media from 'react-media'

import classes from './Navbar.module.sass'

const Navbar = () => {
  return (
    <nav className={classes['navbar']}>
      <div className={classes['links-container']}>
        <Media queries={{ small: '(min-width: 576px)' }}>
          {(matches) => (
            <>
              <NavLink exact to="/" className={classes['navbar__link']} activeClassName={classes['navbar__link_active']}>
                <i className="fas fa-fire-alt"></i>
                {matches.small && (
                  <span className="navbar__link__alt">&nbsp;popular</span>
                )}
              </NavLink>
              <NavLink to="/public" className={classes['navbar__link']} activeClassName={classes['navbar__link_active']}>
                <i className="fas fa-rss-square"></i>
                {matches.small && (
                  <span className="navbar__link__alt">&nbsp;public</span>
                )}
              </NavLink>
              <NavLink to="/private" className={classes['navbar__link']} activeClassName={classes['navbar__link_active']}>
                <i className="fas fa-lock"></i>
                {matches.small && (
                  <span className="navbar__link__alt">&nbsp;private</span>
                )}
              </NavLink>
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
