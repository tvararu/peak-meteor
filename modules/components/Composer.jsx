import React, { Component } from 'react'
import Radium from 'radium'
import LinkedStateMixin from 'react-addons-linked-state-mixin'
import reactMixin from 'react-mixin'
import {
  Card,
  CardText,
  RaisedButton,
  TextField
} from 'mui'

@Radium
@reactMixin.decorate(LinkedStateMixin)
export default class Composer extends Component {
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

  submitPost () {
    Meteor.call('addPost', this.state.content)
    this.setState({ content: '' })
    this.refs.textField.blur()
  }

  render () {
    return <Card style={{ paddingBottom: '16px' }}>
      <CardText style={{ clear: 'both' }}>
        <TextField
          floatingLabelText='Write a new post.'
          hintStyle={{ top: '13px' }}
          multiLine={ true }
          onEnterKeyDown={ this.handleEnterKey.bind(this) }
          ref={ 'textField' }
          rows={ 2 }
          style={{ width: '100%' }}
          valueLink={ this.linkState('content') }
        />
        <RaisedButton
          disabled={ !this.canSubmitPost() }
          label='Post'
          onClick={ this.submitPost.bind(this) }
          primary={ true }
          style={{ float: 'right' }}
        />
      </CardText>
    </Card>
  }
}
