import { Component } from 'react'
import _ from 'lodash'
import Radium from 'radium'
import FeedItem from 'components/FeedItem'
import Composer from 'components/Composer'

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
      <div style={{ marginBottom: '10px' }}>
        <Composer />
      </div>
      <div>
        { feedItems.map(n => <div key={ n } style={{ marginBottom: '10px' }}>
            <FeedItem />
          </div>)
        }
      </div>
    </div>
  }
}
