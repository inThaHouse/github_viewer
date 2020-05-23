import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from '../../pages/Home'
import About from '../../pages/About'
import Search from '../../pages/Search'
import Navigation from '../Navigation/Navigation'
import Layout from '../Layout/Layout'
import RepoProfile from '../../pages/RepoProfile'

const App = (): React.ReactElement => {
  return (
    <Router>
      <Navigation />
      <Layout>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/search'>
            <Search />
          </Route>
          <Route exact path='/repoProfile'>
            <h1
              style={{
                background: 'seagreen',
                color: 'white',
                textAlign: 'center',
              }}
            >
              UNDER DEVELOPMENT
            </h1>
            <RepoProfile />
          </Route>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
