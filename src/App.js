import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

import PopularTreds from './components/class/PopularTreds/PopularTreds'
import Tred from './components/class/Tred/Tred'
import CreateTred from './components/class/CreateTred/CreateTred'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact component={PopularTreds} />
        <Route path="/public" exact render={() => <h1>Public treds</h1>} />
        <Route path="/public/:board/:id" component={Tred} />
        <Route path="/public/:board/create" component={CreateTred} />
        <Route path="/private" render={() => <h1>Private treds</h1>} />
      </Switch>
    )

    return <Layout>{routes}</Layout>
  }
}

export default App
