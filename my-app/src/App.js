import React, { Component } from 'react'
import Block from './block'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Block color='red' />
        <Block />
        <Block color='blue' />
        <Block />
      </div>
    )
  }
}

export default App
