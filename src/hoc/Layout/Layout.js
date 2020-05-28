import React from 'react'
import Navbar from '../../components/UI/Navbar/Navbar'
import styled, { ThemeProvider } from 'styled-components'
import { light, dark } from '../../components/styled/themes'

const Main = styled.main`
  min-height: 100vh;
  padding-top: 50px;
  background: ${({ theme }) => theme.bgColor};
`

const Layout = props => {
  return (
    <ThemeProvider theme={dark} className='App'>
      <Navbar />
      <Main>{props.children}</Main>
    </ThemeProvider>
  )
}

export default Layout
