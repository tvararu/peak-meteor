import { Component } from 'react'
import Radium from 'radium'

@Radium
class HeroHeader extends Component {
  getStyles () {
    return [{
      fontWeight: 'bold'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      PEAK
    </div>
  }
}

@Radium
export default class Home extends Component {
  getStyles () {
    return [{
      color: 'blue'
    }]
  }

  render () {
    return <div style={ this.getStyles() }>
      <HeroHeader />
    </div>
  }
}
