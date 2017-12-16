import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Skills from '../Skills/Skills'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-main">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
        </Switch>
      </div>
    )
  }
}

export default App
