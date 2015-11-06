import { Component } from 'react'
import colors from 'lib/colors'
import Radium from 'radium'

const LoginButtons = BlazeToReact('loginButtons')

@Radium
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

@Radium
export default class Home extends Component {
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
