import { Component } from 'react'
import Radium from 'radium'
import FeedItem from 'components/FeedItem'
import Composer from 'components/Composer'
import reactMixin from 'react-mixin'
import { Posts } from 'App/lib/collections'

@Radium
@reactMixin.decorate(ReactMeteorData)
export default class Feed extends Component {
  getMeteorData () {
    Meteor.subscribe('posts')
    Meteor.subscribe('users')

    return {
      posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
      users: Meteor.users.find().fetch()
    }
  }

  getStyles () {
    return {
      padding: '10px'
    }
  }

  renderPost (post) {
    const author = this.data.users.filter(user => user._id === post.userId)[0]
    return <div key={ post._id } style={{ marginBottom: '10px' }}>
      <FeedItem
        author={ author }
        createdAt={ post.createdAt }
        text={ post.text }
      />
    </div>
  }

  render () {
    return <div style={ this.getStyles() }>
      <div style={{ marginBottom: '10px' }}>
        <Composer />
      </div>
      <div>
        { this.data.posts.map(this.renderPost.bind(this)) }
      </div>
    </div>
  }
}
