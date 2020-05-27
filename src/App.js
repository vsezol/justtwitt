import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

import PopularTreds from './components/class/PopularTreds/PopularTreds'
import TredWithComments from './hoc/TredWithComments/TredWithComments'
import CreateTred from './components/class/CreateTred/CreateTred'
import PublicTreds from './components/func/PublicTreds/PublicTreds'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path='/' exact component={PopularTreds} />
        <Route path='/public' exact component={PublicTreds} />
        <Route
          path='/public/:board/:id'
          component={TredWithComments}
        />
        <Route path='/public/:board/create' component={CreateTred} />
        <Route path='/private' render={() => <h1>Private treds</h1>} />
      </Switch>
    )

    return <Layout>{routes}</Layout>
  }
}

export default App
