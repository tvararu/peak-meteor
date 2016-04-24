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
      justifyContent: 'center',
      textShadow: `1px 1px ${colors.grey900}`,
      width: '100%'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      <div style={[{
        maxWidth: '800px',
        width: '100%'
      }]}>
        <div style={[{
          padding: '20px'
        }]}>
          <h1 style={[{
            fontSize: '100px',
            fontWeight: '300',
            margin: '0'
          }]}>
            P E A K
          </h1>
          <h2>Take your career to new heights.</h2>
        </div>
      </div>
    </div>
  }
}

export default Radium(HeroHeader)
