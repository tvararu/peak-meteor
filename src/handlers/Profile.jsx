import _ from 'lodash'
import React, { Component } from 'react'
import Meteor from 'meteor'
import Radium from 'radium'
import gravatar from 'gravatar'
import reactMixin from 'react-mixin'
import ReactMeteorData from 'meteor/ReactMeteorData'
import PropTypes from 'lib/PropTypes'
import {
  Card,
  CardHeader,
  CardText,
  RaisedButton,
  TextField
} from 'material-ui'

@reactMixin.decorate(ReactMeteorData)
class ProfileHandler extends Component {
  constructor (props) {
    super(props)

    _.bindAll(
      this,
      'save'
    )
  }

  getMeteorData () {
    const user = Meteor.user()
    return { user }
  }

  save (title = '', description = '') {
    Meteor.users.update(
      this.data.user._id,
      {$set: {
        'profile.title': title,
        'profile.description': description
      }}
    )
  }

  render () {
    const email = this.data.user.emails[0].address
    const avatarUrl = gravatar.imageUrl(email)
    let description = ''
    let title = ''
    if (this.data.user && this.data.user.profile) {
      description = this.data.user.profile.description
      title = this.data.user.profile.title
    }

    return <Profile
      avatarUrl={ avatarUrl }
      description={ description }
      email={ email }
      title={ title }
      onSave={ this.save }
    />
  }
}

class Profile extends Component {
  static propTypes = {
    avatarUrl: PropTypes.string.isRequired,
    description: PropTypes.string,
    email: PropTypes.string.isRequired,
    title: PropTypes.string,
    onSave: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: '',
    description: ''
  };

  state = {
    title: this.props.title,
    description: this.props.description
  };

  getStyles () {
    return {
      margin: '0 auto',
      maxWidth: '600px',
      padding: '0 10px 10px 10px'
    }
  }

  constructor (props) {
    super(props)

    _.bindAll(
      this,
      'handleTitleChange',
      'handleDescriptionChange'
    )
  }

  handleTitleChange (title) {
    this.setState({title})
  }

  handleDescriptionChange (description) {
    this.setState({description})
  }

  render () {
    const email = 'theo@vararu.org'
    const avatarUrl = gravatar.imageUrl(email)
    const valueLinkTitle = {
      value: this.state.title,
      requestChange: this.handleTitleChange
    }
    const valueLinkDescription = {
      value: this.state.description,
      requestChange: this.handleDescriptionChange
    }

    return <div style={ this.getStyles() }>
      <h1>Profile</h1>
      <Card style={{ paddingBottom: '16px' }}>
        <CardHeader
          avatar={ avatarUrl }
          subtitle={ <TextField
            hintText='Title and Company'
            style={{
              fontSize: '13px',
              lineHeight: '14px',
              height: '38px'
            }}
            valueLink={ valueLinkTitle }
          /> }
          title={ email }
        />
        <CardText style={{ clear: 'both' }}>
          <br />
          <TextField
            hintText='Enter a brief description about yourself.'
            multiLine={ true }
            valueLink={ valueLinkDescription }
          /><br />
          <RaisedButton
            label='Save'
            primary={ true }
            style={{ float: 'right' }}
            onClick={ () => {
              this.props.onSave(
                this.state.title,
                this.state.description
              )
            } }
          />
        </CardText>
      </Card>
    </div>
  }
}

export default Radium(ProfileHandler)
