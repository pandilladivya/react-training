import React from 'react'

class Shape extends React.Component {
  render () {
    var color = this.props.color ? this.props.color : 'black'

    if (this.props.type === 'triangle') {
      // Draw triangle with given color
      return (
        <div style={{
          width: 0,
          height: 0,
          borderTopWidth: 0,
          borderBottomWidth: 40,
          borderLeftWidth: 20,
          borderRightWidth: 20,
          borderStyle: 'solid',
          backgroundColor: 'transparent',
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: color,
          margin: 10
        }} />
      )
    } else if (this.props.type === 'rectangle') {
      // Draw rectangle with given color
      return (
        <div style={{
          width: 40,
          height: 30,
          backgroundColor: color,
          margin: 10
        }} />
      )
    } else if (this.props.type === 'circle') {
      // Draw circle with given color
      return (
        <div style={{
          width: 40,
          height: 40,
          borderRadius: 40 / 2,
          backgroundColor: color,
          margin: 10
        }} />
      )
    } else {
      // Draw square with given color
      return (
        <div style={{
          width: 40,
          height: 40,
          backgroundColor: color,
          margin: 10
        }} />
      )
    }
  }
}

export default Shape
