import Meteor from 'meteor'
import { Posts } from 'lib/collections'

Meteor.publish('posts', () =>
  Posts.find({}, { sort: { createdAt: -1 } })
)

Meteor.publish('users', () =>
  Meteor.users.find({}, { fields: { emails: 1, profile: 1 } })
)
