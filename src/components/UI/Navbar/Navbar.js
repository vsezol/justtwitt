import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { minMd } from '../../../styled/grid'
import { ThemeSwitcherContext } from '../../../hoc/ThemeSwitcher/ThemeSwitcher'
import { DARK_THEME, LIGHT_THEME } from '../../../hoc/ThemeSwitcher/actionTypes'
import Select from '../Select/Select'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import {
  faFireAlt,
  faRssSquare,
  faLock
} from '@fortawesome/free-solid-svg-icons'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  z-index: 19;
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

const LinkIcon = styled(Icon)`
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
      icon: faFireAlt
    },
    {
      to: '/public',
      text: 'public',
      icon: faRssSquare
    },
    {
      to: '/private',
      text: 'private',
      icon: faLock
    }
  ]

  const themes = [
    {
      value: LIGHT_THEME,
      label: 'Light'
    },
    {
      value: DARK_THEME,
      label: 'Dark'
    }
  ]

  const dispatch = useContext(ThemeSwitcherContext)

  return (
    <Nav>
      <NavContainer>
        {links.map(({ to, icon, text }, index) => (
          <NavbarLink key={index} exact to={to} activeClassName='active'>
            <LinkIcon icon={icon}></LinkIcon>
            <LinkAlt>&nbsp;{text}</LinkAlt>
          </NavbarLink>
        ))}
        <Select
          options={themes}
          onChange={e => dispatch({ type: e.target.value })}
        ></Select>
      </NavContainer>
    </Nav>
  )
}

export default Navbar
