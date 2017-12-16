import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../Home/Home.js'
import About from '../About/About.js'

import './App.css'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
    )
  }
}

export default App
