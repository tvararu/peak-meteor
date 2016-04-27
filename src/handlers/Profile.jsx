import React, { Component } from 'react'
import Radium from 'radium'
import gravatar from 'gravatar'
import {
  Card,
  CardHeader,
  CardText,
  RaisedButton,
  TextField
} from 'material-ui'

class Profile extends Component {
  getStyles () {
    return {
      margin: '0 auto',
      maxWidth: '600px',
      padding: '0 10px 10px 10px'
    }
  }

  render () {
    const email = 'theo@vararu.org'
    const avatarUrl = gravatar.imageUrl(email)

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
          /> }
          title={ email }
        />
        <CardText style={{ clear: 'both' }}>
          <br />
          <TextField
            hintText='Enter a brief description about yourself.'
            multiLine={ true }
          /><br />
          <RaisedButton
            label='Save'
            primary={ true }
            style={{ float: 'right' }}
          />
        </CardText>
      </Card>
    </div>
  }
}

export default Radium(Profile)
