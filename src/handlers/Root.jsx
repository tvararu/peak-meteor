import Meteor from 'meteor'
import React from 'react'
import { Provider } from 'react-redux'
import { connectToMeteor } from 'meteoredux'
import { AppCanvas, AppBar, Styles } from 'material-ui'
import DevTools from 'handlers/DevTools'
import PropTypes from 'lib/PropTypes'
import configureStore from 'lib/configureStore'
import StyleReset from 'components/StyleReset'

const { ThemeManager, LightRawTheme } = Styles
const APPBAR_HEIGHT = 64

const store = configureStore()

Meteor.subscribe('posts')
Meteor.subscribe('users')

connectToMeteor(store)

export default class Root extends React.Component {
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
      <div>
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
        <DevTools />
      </div>
    </Provider>
  }
}
