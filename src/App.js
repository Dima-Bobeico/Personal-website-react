import React from 'react'
import Navbar from './components/navbar'
import './App.css'
import Intro from './Intro'
import Contact from './Contact'
import About from './About'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Intro}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
      </div>
    </Router>
  )
}

export default App