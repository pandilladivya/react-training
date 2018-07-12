import React from 'react'

class Block extends React.Component {
  render () {
    var color = this.props.color ? this.props.color : 'black'

    return (
      <div style={{width: 40, height: 40, backgroundColor: color, margin: 10}} />
    )
  }
}

export default Block
