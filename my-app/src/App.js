import React, { Component } from 'react'
import Shape from './shape'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Shape color='blue' type='rectangle' />
        <Shape color='green' type='circle' />
        <Shape /> {/* Default color is black & shape is square */}
        <Shape color='magenta' type='triangle' />
      </div>
    )
  }
}

export default App
