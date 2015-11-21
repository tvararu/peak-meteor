import { Component } from 'react'
import Radium from 'radium'
import {
  Avatar,
  Card,
  CardHeader,
  CardText
} from 'mui'

@Radium
export default class FeedItem extends Component {
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
