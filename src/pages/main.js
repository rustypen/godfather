import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './home';
import User from './user';
import Header from '../components/header/header';

function main() {
  return (
    <Router>
      <Header/>
      <main className="page">
        <Switch>
          <Route path="/:username" component={User} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </Router>
  )
}

export default main