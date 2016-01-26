import BlazeToReact from 'meteor/BlazeToReact'
import React, { Component } from 'react'
import colors from 'lib/colors'
import Radium from 'radium'
import HeroHeader from 'components/HeroHeader'

const LoginButtons = BlazeToReact('loginButtons')

class Home extends Component {
  getStyles () {
    return [{
      alignItems: 'center',
      backgroundColor: colors.indigo500,
      color: colors.grey50,
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      <div>
        <HeroHeader />
        <LoginButtons />
      </div>
    </div>
  }
}

export default Radium(Home)
