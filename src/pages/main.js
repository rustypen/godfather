import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Header from '../components/header';
import Home from './home';
import Search from './search';

function main() {
  return (
    <Router>
      {/* <Header/> */}
      <Switch>
        <Route path="/search" component={Search} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default main