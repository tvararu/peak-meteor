import { Posts } from 'App/lib/collections'

Meteor.publish('posts', () =>
  Posts.find({}, { sort: { createdAt: -1 } })
)
