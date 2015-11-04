import { Component, PropTypes } from 'react'

export default class Root extends Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return <div>{ this.props.children }</div>
  }
}
