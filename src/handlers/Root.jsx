import React, { Component } from 'react'
import Meteor from 'meteor'
import Peer from 'peerjs'
import {
  AppCanvas,
  Styles
} from 'material-ui'
import PropTypes from 'lib/PropTypes'
const { ThemeManager, LightRawTheme } = Styles
import Bar from 'components/Bar'

import StyleReset from 'components/StyleReset'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  constructor (props) {
    super(props)

    Meteor.subscribe('posts')
    Meteor.subscribe('users')

    const PEER_API_KEY = '55rcmc6w7jm50zfr'
    const peer = new Peer({ key: PEER_API_KEY })

    peer.on('open', (id) => {
      const currentUser = Meteor.user()
      if (currentUser) {
        Meteor.users.update(
          currentUser._id,
          {$set: { 'profile.peerId': id }}
        )
      }
    })
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    }
  }

  render () {
    return <AppCanvas>
      <StyleReset />
      <Bar />
      { this.props.children }
    </AppCanvas>
  }
}
