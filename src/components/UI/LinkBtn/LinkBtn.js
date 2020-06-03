import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-block;
  padding: 10px;
  border-radius: 5px;
  font-size: 1rem;
  font-family: 'Roboto-Italic';
  text-decoration: none;
  box-sizing: border-box;
  width: ${({ width }) => width ? width : 'max-content'};

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