import Meteor from 'meteor'
import { Posts } from 'App/lib/collections'

Meteor.publish('posts', () =>
  Posts.find({}, { sort: { createdAt: -1 } })
)

Meteor.publish('users', () =>
  Meteor.users.find({}, { fields: { emails: 1 } })
)
