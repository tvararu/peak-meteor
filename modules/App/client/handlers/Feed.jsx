import { Component } from 'react'
import _ from 'lodash'
import Radium from 'radium'

import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardText,
  CardTitle,
  FlatButton
} from 'material-ui'

@Radium
class FeedItem extends Component {
  getStyles () {
    return {
      marginBottom: '10px'
    }
  }

  render () {
    return <Card style={ this.getStyles() }>
      <CardHeader
        avatar={ <Avatar>A</Avatar> }
        subtitle='Subtitle'
        title='Title'
      />
      <CardText>
        Lorem ipsum.
      </CardText>
    </Card>
  }
}

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
