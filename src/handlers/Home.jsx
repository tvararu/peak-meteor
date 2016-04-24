import BlazeToReact from 'meteor/BlazeToReact'
import React, { Component } from 'react'
import Radium from 'radium'
import Feed from 'handlers/Feed'
import Meteor from 'meteor'
import reactMixin from 'react-mixin'
import ReactMeteorData from 'meteor/ReactMeteorData'
import HeroHeader from 'components/HeroHeader/index'

const LoginButtons = BlazeToReact('loginButtons')

@reactMixin.decorate(ReactMeteorData)
class Home extends Component {
  getStyles () {
    return [{
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column'
    }]
  }

  getMeteorData () {
    Meteor.subscribe('users')

    return {
      user: Meteor.user()
    }
  }

  render () {
    const isLoggedIn = this.data.user
    if (isLoggedIn) {
      return <Feed />
    } else {
      return <div style={ this.getStyles() }>
        <HeroHeader />
        <div style={{
          maxWidth: '800px',
          padding: '100px',
          width: '100%'
        }}>
          <div style={{
            padding: '0 20px'
          }}>
            <h2>What's this?</h2>
            <p>PEAK is a brand new approach to hiring, currently in private beta.</p>
            <p>Get headhunted by top companies or find talent for your startup.</p>
            <p>Sign up today!</p>
            <LoginButtons />
          </div>
        </div>
      </div>
    }
  }
}

export default Radium(Home)
