import React, { Component } from 'react'
import shouldPureComponentUpdate from 'react-pure-render'
import gravatar from 'gravatar'
import PropTypes from 'lib/PropTypes'
import { Link } from 'react-router'
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui'

export default class FeedItem extends Component {
  static propTypes = {
    author: PropTypes.pk.user.isRequired,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  render () {
    const author = this.props.author
    const email = author.emails[0].address
    const avatarUrl = gravatar.imageUrl(email)
    let title = ''
    if (author.profile && author.profile.title) {
      title = author.profile.title
    }

    return <Card>
      <CardHeader
        avatar={ avatarUrl }
        subtitle={
          <div>
            { title }
            <span style={{
              position: 'absolute',
              right: '16px',
              top: '18px'
            }}>{ this.props.createdAt.toLocaleString() }</span>
          </div>
        }
        title={
          <Link to={ `/profile/${author._id}` }>{ email }</Link>
        }
      />
      <CardText>
        { this.props.text }
      </CardText>
    </Card>
  }
}
