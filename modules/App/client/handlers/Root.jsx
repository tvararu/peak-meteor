import React, { Component } from 'react'
import { AppCanvas, AppBar, Styles } from 'mui'
import PropTypes from 'lib/PropTypes'
const { ThemeManager, LightRawTheme } = Styles

import StyleReset from 'components/StyleReset'

const APPBAR_HEIGHT = 64

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
      <AppBar
        showMenuIconButton={ false }
        title='PEAK'
      />
      <div style={{ paddingTop: `${APPBAR_HEIGHT}px` }}>
        { this.props.children }
      </div>
    </AppCanvas>
  }
}
