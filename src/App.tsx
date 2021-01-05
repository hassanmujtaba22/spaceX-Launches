import React from 'react'
import "./styles/App.css"

import {BrowserRouter, Route, Switch} from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import LaunchesContainer from './components/Launches'
import LaunchDetailContainer from './components/LaunchDetail'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/launches" component={LaunchesContainer}/>
        <Route path="/launchDetail" component={LaunchDetailContainer}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
