import React, { Component } from 'react'
import Meteor from 'meteor'
import Radium from 'radium'
import { Link } from 'react-router'
import reactMixin from 'react-mixin'
import ReactMeteorData from 'meteor/ReactMeteorData'
import MUI from 'material-ui'
const {
  AppBar,
  IconButton,
  IconMenu,
  MenuItem
} = MUI
const { NavigationMoreVert } = MUI.Libs.SvgIcons

const linkResetStyle = {
  color: 'inherit',
  textDecoration: 'none'
}

@reactMixin.decorate(ReactMeteorData)
class Bar extends Component {
  getMeteorData () {
    return {
      user: Meteor.user()
    }
  }

  render () {
    const isLoggedIn = this.data.user
    if (isLoggedIn) {
      return <AppBar
        showMenuIconButton={ false }
        title={ <Link to='/' style={ linkResetStyle }>PEAK</Link> }
        style={{ marginBottom: '10px' }}
        iconElementRight={
          <IconMenu
            iconButtonElement={ <IconButton><NavigationMoreVert /></IconButton> }
            targetOrigin={{horizontal: 'right', vertical: 'top'}}
            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          >
            <MenuItem index={ 0 }><Link to='/profile' style={ linkResetStyle }>Profile</Link></MenuItem>
            <MenuItem index={ 1 } onTouchTap={ () => Meteor.logout() }>Logout</MenuItem>
          </IconMenu>
        }
      />
    } else {
      return null
    }
  }
}

export default Radium(Bar)
