import { Component } from 'react'
import colors from 'lib/colors'
import Radium from 'radium'

@Radium
class HeroHeader extends Component {
  getStyles () {
    return [{
      color: colors.grey50,
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
      height: '100%',
      display: 'flex',
      justifyContent: 'center'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      <HeroHeader />
    </div>
  }
}
