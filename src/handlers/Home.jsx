import React, { Component } from 'react'
// import colors from 'lib/colors'
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
        height: '100vh'
      }]}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  }
}

export default Radium(Home)
