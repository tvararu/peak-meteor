import { Component, PropTypes } from 'react'
import { AppCanvas, IconMenu, IconButton, MenuItem, FontIcon, AppBar, Styles } from 'material-ui'
const { ThemeManager, LightRawTheme } = Styles

import StyleReset from 'components/StyleReset'

const iconButtonElement = <IconButton>
  <FontIcon className='material-icons'>more_vert</FontIcon>
</IconButton>

const iconElementRight = <IconMenu iconButtonElement={ iconButtonElement }>
  <MenuItem index={ 1 }>adka</MenuItem>
  <MenuItem index={ 2 }>adka</MenuItem>
  <MenuItem index={ 3 }>adka</MenuItem>
</IconMenu>

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
      <AppBar
        iconElementRight={ iconElementRight }
        showMenuIconButton={ false }
        title='PEAK'
      />
      { this.props.children }
    </AppCanvas>
  }
}
