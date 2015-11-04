import { Component, PropTypes } from 'react'

import { AppCanvas, AppBar, Styles, RaisedButton, DatePicker } from 'material-ui'
const { ThemeManager, LightRawTheme } = Styles

export default class Home extends Component {
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
      <AppBar title='Hello'/>
      <div style={{padding: '80px'}}>
        <RaisedButton primary={true} label='Tap' />
        <br/>
        <DatePicker hintText='Portrait Dialog' />
        <br/>
        <DatePicker
          hintText='Landscape Dialog'
          mode='landscape'
        />
      </div>
    </AppCanvas>
  }
}
