import React from 'react'
import Navbar from './components/navbar'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="intro">
        <h1>Student, Developer, Drawing.</h1>
        <button className="button button1">
          More
      </button>
      </div>
    </div>
  )
}

export default App