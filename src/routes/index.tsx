import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Shows from '../pages/shows/Shows'
import Information from '../pages/information/Information'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Shows} />
        <Route path="/information" component={Information} />
      </Switch>
    </Router>
  )
}

export default Routes
