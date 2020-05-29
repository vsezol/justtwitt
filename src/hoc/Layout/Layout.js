import React from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'
import styled from 'styled-components'
import { ThemeSwitcherProvider } from '../ThemeSwitcher/ThemeSwitcher'

const Main = styled.main`
  min-height: 100vh;
  padding-top: 50px;
  background: ${({ theme }) => theme.bgColor};
`

const Layout = props => {
  return (
    <ThemeSwitcherProvider>
      <Navbar />
      <Main>{props.children}</Main>
    </ThemeSwitcherProvider>
  )
}

export default Layout