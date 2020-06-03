import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import Layout from './hoc/Layout/Layout'

import PopularTreds from './components/class/PopularTreds/PopularTreds'
import TredWithComments from './hoc/TredWithComments/TredWithComments'
import CreateTred from './components/class/CreateTred/CreateTred'
import PublicTreds from './components/func/PublicTreds/PublicTreds'

import { minLg } from './styled/grid'

const GlobalStyle = createGlobalStyle`
  @media screen and (min-width: ${minLg}px) {
    body {
      &::-webkit-scrollbar {
        width: 10px;
        background: ${({ theme }) => theme.bgColor};
      }
      &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.defColor};
      }
    }
  }
`

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path='/' exact component={PopularTreds} />
        <Route path='/public' exact component={PublicTreds} />
        <Route path='/public/:board/:id' component={TredWithComments} />
        <Route path='/public/:board/create' component={CreateTred} />
        {/* <Route path='/private' render={() => <h1>Private treds</h1>} /> */}
      </Switch>
    )

    return (
      <Layout>
        <GlobalStyle />
        {routes}
      </Layout>
    )
  }
}

export default App
