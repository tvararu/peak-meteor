import React, { Component } from 'react'
import Radium from 'radium'

class HeroHeader extends Component {
  getStyles () {
    return [{
      fontSize: '100px',
      fontWeight: '300'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      P E A K
    </div>
  }
}

export default Radium(HeroHeader)
