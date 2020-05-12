import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact render={() => <h1>Popular treds</h1>} />
        <Route path="/public" exact render={() => <h1>Public treds</h1>} />
        <Route path="/private" exact render={() => <h1>Private treds</h1>} />
      </Switch>
    )

    return <Layout>{routes}</Layout>
  }
}

export default App
