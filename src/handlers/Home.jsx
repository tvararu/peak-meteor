import React, { Component } from 'react'
import Radium from 'radium'
import HeroHeader from 'components/HeroHeader/index'

class Home extends Component {
  getStyles () {
    return [{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      <HeroHeader />
      <div style={[{
        maxWidth: '800px',
        padding: '100px',
        width: '100%'
      }]}>
        <div style={[{
          padding: '0 20px'
        }]}>
          <h2>What's this?</h2>
          <p>PEAK is a brand new approach to hiring, currently in private beta.</p>
          <p>Get headhunted by top companies or find talent for your startup.</p>
          <p>Sign up today!</p>
        </div>
      </div>
    </div>
  }
}

export default Radium(Home)
