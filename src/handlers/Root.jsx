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

    const currentUser = Meteor.user()
    if (currentUser) {
      const PEER_API_KEY = '55rcmc6w7jm50zfr'
      window.peer = new Peer(currentUser._id, { key: PEER_API_KEY })
    }
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
