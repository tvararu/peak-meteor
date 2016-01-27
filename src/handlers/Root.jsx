import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppCanvas, AppBar, Styles } from 'material-ui'
import PropTypes from 'lib/PropTypes'
import store from 'lib/configureStore'
import StyleReset from 'components/StyleReset'

const { ThemeManager, LightRawTheme } = Styles
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
    return <Provider store={ store }>
      <AppCanvas>
        <StyleReset />
        <AppBar
          showMenuIconButton={ false }
          title='PEAK'
          />
        <div style={{ paddingTop: `${APPBAR_HEIGHT}px` }}>
          { this.props.children }
        </div>
      </AppCanvas>
    </Provider>
  }
}
