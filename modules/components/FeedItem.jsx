import React, { Component } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import reactMixin from 'react-mixin'
import gravatar from 'gravatar'
import PropTypes from 'lib/PropTypes'
import {
  Card,
  CardHeader,
  CardText
} from 'mui'

@reactMixin.decorate(PureRenderMixin)
export default class FeedItem extends Component {
  static propTypes = {
    author: PropTypes.pk.user.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired
  }

  render () {
    const email = this.props.author.emails[0].address
    const avatarUrl = gravatar.imageUrl(email)

    return <Card>
      <CardHeader
        avatar={ avatarUrl }
        subtitle={ this.props.createdAt.toLocaleString() }
        title={ email }
      />
      <CardText>
        { this.props.text }
      </CardText>
    </Card>
  }
}
