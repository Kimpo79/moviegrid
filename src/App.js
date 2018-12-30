import React, { Component } from 'react'
import MovieGrid from './lib/components/MovieGrid'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app">
        <MovieGrid />
      </div>
    )
  }
}

export default App
