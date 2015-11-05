import { Component, PropTypes } from 'react'
import { AppCanvas, Styles } from 'material-ui'
const { ThemeManager, LightRawTheme } = Styles

import StyleReset from 'components/StyleReset'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  static childContextTypes = {
    muiTheme: PropTypes.object
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
    }
  }

  render () {
    return <AppCanvas>
      <StyleReset />
      { this.props.children }
    </AppCanvas>
  }
}
