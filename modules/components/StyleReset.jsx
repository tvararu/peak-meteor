// @flow
import React, { Component } from 'react'
import { Style } from 'radium'

export default class StyleReset extends Component {
  render () {
    return <Style rules={{
      'html, body, #react-app': {
        height: '100%'
      }
    }} />
  }
}
