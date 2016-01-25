import Meteor from 'meteor'
import React, { Component } from 'react'
import Radium from 'radium'
import {
  Card,
  CardText,
  RaisedButton,
  TextField
} from 'material-ui'

class Composer extends Component {
  state = {
    content: ''
  };

  canSubmitPost () {
    return this.state.content.length !== 0
  }

  handleEnterKey (e) {
    if (e.metaKey) {
      this.submitPost()
    }
  }

  handleChange (content) {
    this.setState({content})
  }

  submitPost () {
    Meteor.call('addPost', this.state.content)
    this.setState({ content: '' })
    this.refs.textField.blur()
  }

  render () {
    var valueLink = {
      value: this.state.content,
      requestChange: this.handleChange
    }

    return <Card style={{ paddingBottom: '16px' }}>
      <CardText style={{ clear: 'both' }}>
        <TextField
          floatingLabelText='Write a new post.'
          hintStyle={{ top: '13px' }}
          multiLine
          onEnterKeyDown={ this.handleEnterKey.bind(this) }
          ref={ 'textField' }
          rows={ 2 }
          style={{ width: '100%' }}
          valueLink={ valueLink }
        />
        <RaisedButton
          disabled={ !this.canSubmitPost() }
          label='Post'
          onClick={ this.submitPost.bind(this) }
          primary
          style={{ float: 'right' }}
        />
      </CardText>
    </Card>
  }
}

export default Radium(Composer)
