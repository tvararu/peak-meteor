import { Component } from 'react'
import _ from 'lodash'
import Radium from 'radium'
import FeedItem from 'components/FeedItem'

@Radium
export default class Feed extends Component {
  getStyles () {
    return {
      padding: '10px'
    }
  }

  render () {
    const feedItems = _.range(0, 10)

    return <div style={ this.getStyles() }>
      <div>
        { feedItems.map(n => <FeedItem key={ n } />) }
      </div>
    </div>
  }
}
