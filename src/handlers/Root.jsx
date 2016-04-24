import React, { Component } from 'react'
import {
  AppCanvas,
  Styles
} from 'material-ui'
import PropTypes from 'lib/PropTypes'
const { ThemeManager, LightRawTheme } = Styles

import StyleReset from 'components/StyleReset'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element
  };

  static childContextTypes = {
    muiTheme: PropTypes.object
  };

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    }
  }

  render () {
    return <AppCanvas>
      <StyleReset />
      <div style={{
        height: '100%'
      }}>
        { this.props.children }
      </div>
    </AppCanvas>
  }
}
