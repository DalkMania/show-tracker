import React from 'react';
import { Route, Switch } from 'react-router-dom'
import AuthorizedRoute from '../../components/AuthorizedRoute'
import NotFound from '../NotFound'
import Home from '../Home'
import Profile from '../Profile'
import ProfileCalendar from '../ProfileCalendar'
import About from '../About'

import '../../assets/css/style.css'


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <AuthorizedRoute exact path="/collection" component={Profile} />
    <AuthorizedRoute exact path="/calendar" component={ProfileCalendar} />
    <Route component={NotFound}/>
  </Switch>
)

export default App
