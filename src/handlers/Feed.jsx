import React, { Component } from 'react'
import Radium from 'radium'
import { connect } from 'react-redux'
import { TransitionMotion, spring } from 'react-motion'
import _ from 'lodash'
import PropTypes from 'lib/PropTypes'
import FeedItem from 'components/FeedItem'
import Composer from 'components/Composer'

class Feed extends Component {
  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    users: PropTypes.arrayOf(PropTypes.object)
  };

  constructor (props) {
    super(props)

    _.bindAll(this, [
      'getStyles',
      'getMotionStyles',
      'willEnter',
      'willLeave',
      'renderPost',
      'renderFeed'
    ])
  }

  getStyles () {
    return {
      padding: '10px'
    }
  }

  getMotionStyles () {
    return this.props.posts.reduce((acc, post, idx) => {
      acc[post._id] = {
        opacity: spring(1),
        translateY: spring(idx * 130),
        data: post
      }
      return acc
    }, {})
  }

  willEnter (id) {
    return {
      opacity: spring(0),
      translateY: spring(0),
      data: this.props.posts.filter(post => post._id === id)[0]
    }
  }

  willLeave (id, style) {
    return {
      opacity: spring(0),
      translateY: style.translateY,
      data: style.data
    }
  }

  renderPost (post) {
    const author = this.props.users.filter(user => user._id === post.userId)[0]
    return <FeedItem
      author={ author }
      createdAt={ post.createdAt }
      text={ post.text }
    />
  }

  renderFeed () {
    return <TransitionMotion
      styles={ this.getMotionStyles() }
      willEnter={ this.willEnter.bind(this) }
      willLeave={ this.willLeave.bind(this) }
    >
      { interpolatedStyles => {
        const styleKeys = Object.keys(interpolatedStyles)
        // TODO: Hardcoded height.
        const height = styleKeys.length * (130)
        const style = {
          height: `${height}px`,
          position: 'relative'
        }

        return <div style={ style }>
          { styleKeys.map(key => {
            const { data, opacity, translateY } = interpolatedStyles[key]
            const style = {
              marginBottom: '10px',
              position: 'absolute',
              transform: `translate3d(0, ${translateY}px, 0)`,
              opacity: opacity,
              width: '100%'
            }

            return <div key={ data._id } style={ style }>
              { this.renderPost(data) }
            </div>
          }) }
        </div> }
      }
    </TransitionMotion>
  }

  render () {
    return <div style={ this.getStyles() }>
      <div style={{ marginBottom: '10px' }}>
        <Composer />
      </div>
      { this.renderFeed() }
    </div>
  }
}

const mapStateToProps = state => ({
  posts: [],
  users: []
})

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Radium(Feed))
