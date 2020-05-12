import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout'

class App extends Component {
  render() {
    const routes = (
      <Switch>
        <Route path="/" exact render={() => <h1>MAIN PAGE</h1>} />
        <Route path="/profile" render={() => <h1>PROFILE PAGE</h1>} />
      </Switch>
    )

    return <Layout>{routes}</Layout>
  }
}

export default App
