import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { minMd } from '../../styled/grid'
import { ThemeSwitcherContext } from '../../../hoc/ThemeSwitcher/ThemeSwitcher'
import { DARK_THEME, LIGHT_THEME } from '../../../hoc/ThemeSwitcher/actionTypes'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  max-height: 50px;
  background: ${({ theme }) => theme.defColor};
`

const NavContainer = styled.div`
  height: 40px;
  max-height: 40px;
  max-width: 576px;
  padding: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const LinkIcon = styled.i`
  transition: 0.15s;
  font-size: 1.7rem;
`

const NavbarLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.linkColor};
  text-decoration: none !important;
  text-transform: lowercase;
  height: 100%;
  flex-grow: 1;
  &:hover {
    color: ${({ theme }) => theme.linkColor};
  }
  &.active ${LinkIcon} {
    transform: rotate(-30deg);
  }
`

const LinkAlt = styled.span`
  display: none;
  font-size: 1.5rem;
  font-family: 'Roboto-Regular';
  margin-left: 5px;
  @media (min-width: ${minMd}px) {
    display: inline-block;
  }
`

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

  const themes = [
    {
      type: LIGHT_THEME,
      text: 'Light'
    },
    {
      type: DARK_THEME,
      text: 'Dark'
    }
  ]

  const dispatch = useContext(ThemeSwitcherContext)

  return (
    <Nav>
      <NavContainer>
        {links.map((link, index) => (
          <NavbarLink key={index} exact to={link.to} activeClassName='active'>
            <LinkIcon className={link.iconClasses}></LinkIcon>
            <LinkAlt>&nbsp;{link.text}</LinkAlt>
          </NavbarLink>
        ))}
        <select onChange={e => dispatch({ type: e.target.value })}>
          {themes.map((theme, index) => (
            <option key={index} value={theme.type}>
              {theme.text}
            </option>
          ))}
        </select>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
