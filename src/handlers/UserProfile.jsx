import React, { Component } from 'react'
import gravatar from 'gravatar'
import Meteor from 'meteor'
import Radium from 'radium'
import reactMixin from 'react-mixin'
import ReactMeteorData from 'meteor/ReactMeteorData'
import PropTypes from 'lib/PropTypes'
import {
  Card,
  CardHeader,
  CardText
} from 'material-ui'

const Description = ({ content }) => {
  return <div>
    { content.split('\n').map((c, idx) => <span key={ idx }>{c}<br /></span>) }
  </div>
}

@reactMixin.decorate(ReactMeteorData)
class UserProfile extends Component {
  static propTypes = {
    params: PropTypes.any
  };

  static defaultProps = {
    params: {
      id: null
    }
  };

  getMeteorData () {
    return {
      user: Meteor.users.findOne(this.props.params.id)
    }
  }

  render () {
    let email = ''
    let avatarUrl = ''
    let title = ''
    let description = ''
    const author = this.data.user
    if (author) {
      if (author.emails) {
        email = author.emails[0].address
        avatarUrl = gravatar.imageUrl(email)
      }
      if (author.profile) {
        if (author.profile.title) {
          title = author.profile.title
        }
        if (author.profile.description) {
          description = author.profile.description
        }
      }
    }

    return <div style={{
      margin: '0 auto',
      maxWidth: '600px',
      padding: '0 10px 10px 10px'
    }}>
      <Card style={{ paddingBottom: '16px' }}>
        <CardHeader
          avatar={ avatarUrl }
          subtitle={ title }
          title={ email }
        />
        <CardText>
          <Description content={ description } />
        </CardText>
      </Card>
    </div>
  }
}

export default Radium(UserProfile)
