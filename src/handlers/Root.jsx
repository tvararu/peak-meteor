import Meteor from 'meteor'
import React from 'react'
import { Provider } from 'react-redux'
import { AppCanvas, AppBar, Styles } from 'material-ui'
import DevTools from 'handlers/DevTools'
import PropTypes from 'lib/PropTypes'
import configureStore from 'lib/configureStore'
import StyleReset from 'components/StyleReset'

const { ThemeManager, LightRawTheme } = Styles
const APPBAR_HEIGHT = 64

const store = configureStore()

export default class Root extends React.Component {
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
  }

  getStyles () {
    return {
      height: `calc(100% - ${APPBAR_HEIGHT}px)`,
      paddingTop: `${APPBAR_HEIGHT}px`
    }
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    }
  }

  render () {
    return <Provider store={ store }>
      <div style={{ height: '100%' }}>
        <AppCanvas>
          <StyleReset />
          <AppBar
            showMenuIconButton={ false }
            title='PEAK'
            />
          <div style={ this.getStyles() }>
            { this.props.children }
          </div>
        </AppCanvas>
        <DevTools />
      </div>
    </Provider>
  }
}
