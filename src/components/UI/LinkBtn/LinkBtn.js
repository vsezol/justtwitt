import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkBtn = styled(Link)`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;

  font-size: 1rem;
  font-family: 'Roboto-Italic';
  text-decoration: none;

  color: ${({ theme }) => theme.linkColor};
  background: ${({ theme }) => theme.defColor};

  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus,
  &:active {
    box-shadow: ${({ theme }) => theme.linkHoverShadow};
    background: ${({ theme }) => theme.linkHoverBg};
  }
`

export default ({ to, children }) => {
  return (
    <LinkBtn to={to}>
      {children}
    </LinkBtn>
  )
}
