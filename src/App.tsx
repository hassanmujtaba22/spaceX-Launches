import React, { useCallback, useState } from 'react'
import "./styles/App.css"

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Nav from './components/Nav'
import Home from './components/Home'
import LaunchesContainer from './components/Launches'
import LaunchDetailContainer from './components/LaunchDetail'



function App() {

  const [id, setId] = useState(24)
  const handleIdChange = useCallback(newId => {
    setId(newId)
  }, [])

  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/launches">
          <LaunchesContainer handleIdChange={handleIdChange} />
        </Route>
        <Route path="/launch/">
          <LaunchDetailContainer id={id} />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
