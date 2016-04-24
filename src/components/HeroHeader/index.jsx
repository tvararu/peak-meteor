import React, { Component } from 'react'
import colors from 'lib/colors'
import Radium from 'radium'
import mountainSrc from './mountain.jpg'

class HeroHeader extends Component {
  getStyles () {
    return [{
      alignItems: 'center',
      backgroundImage: `url('${mountainSrc}')`,
      backgroundSize: 'cover',
      color: colors.grey50,
      display: 'flex',
      height: '100vh',
      fontWeight: '300',
      justifyContent: 'center',
      width: '100%'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      <div>
        <h1>PEAK</h1>
        <p>Take your career to new heights.</p>
      </div>
    </div>
  }
}

export default Radium(HeroHeader)
