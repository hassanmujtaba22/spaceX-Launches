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
    <BrowserRouter data-test="BrowserRouter">
      <Nav data-test="Nav" />
      <Switch data-test="Switch">
      
        <Route path="/" exact component={Home} data-test="HomePage"/>

        <Route path="/launches">
          <LaunchesContainer handleIdChange={handleIdChange} data-test="LaunchContainer" />
        </Route>
        
        <Route path="/launch/">
          <LaunchDetailContainer id={id} data-test="LaunchDetailContainer"/>
        </Route>
        
        <Route path="*">
          <div className="notFound" data-test="notFound">
            <h1>404 Not Found</h1>
          </div>
        </Route>
      
      </Switch>
    </BrowserRouter>
  )
}

export default App
