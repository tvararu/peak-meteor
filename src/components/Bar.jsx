import React, { Component } from 'react'
import Meteor from 'meteor'
import Radium from 'radium'
import MUI from 'material-ui'
const {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem
} = MUI
const { NavigationMoreVert } = MUI.Libs.SvgIcons

class Bar extends Component {
  render () {
    return <AppBar
      showMenuIconButton={ false }
      title='PEAK'
      style={{ marginBottom: '10px' }}
      iconElementRight={
        <IconMenu
          iconButtonElement={ <IconButton><NavigationMoreVert /></IconButton> }
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem index={ 0 } onTouchTap={ () => Meteor.logout() }>Logout</MenuItem>
        </IconMenu>
      }
    />
  }
}

export default Radium(Bar)
