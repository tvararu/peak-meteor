import { Component } from 'react'
import {
  Avatar,
  Card,
  CardHeader,
  CardText
} from 'mui'

export default class FeedItem extends Component {
  render () {
    return <Card>
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
