import _ from 'lodash'
import Meteor from 'meteor'
import React, { Component } from 'react'
import Radium from 'radium'
import reactMixin from 'react-mixin'
import ReactMeteorData from 'meteor/ReactMeteorData'
import FeedItem from 'components/FeedItem'
import Composer from 'components/Composer'
import { TransitionMotion, spring } from 'react-motion'
import { Posts } from 'lib/collections'

@reactMixin.decorate(ReactMeteorData)
class Feed extends Component {
  constructor (props) {
    super(props)

    _.bindAll(
      this,
      'willEnter',
      'willLeave'
    )
  }

  getMeteorData () {
    return {
      posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
      users: Meteor.users.find().fetch()
    }
  }

  getStyles () {
    return {
      margin: '0 auto',
      maxWidth: '600px',
      padding: '0 10px 10px 10px'
    }
  }

  getMotionStyles () {
    return this.data.posts.reduce((acc, post, idx) => {
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
      data: this.data.posts.filter(post => post._id === id)[0]
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
    const author = this.data.users.filter(user => user._id === post.userId)[0]
    return <FeedItem
      author={ author }
      createdAt={ post.createdAt }
      text={ post.text }
    />
  }

  renderFeed () {
    return <TransitionMotion
      styles={ this.getMotionStyles() }
      willEnter={ this.willEnter }
      willLeave={ this.willLeave }
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

export default Radium(Feed)
