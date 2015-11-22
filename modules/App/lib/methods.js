import { Posts } from 'App/lib/collections'

Meteor.methods({
  addPost (text) {
    check(text, String)

    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized')
    }

    Posts.insert({
      createdAt: new Date(),
      text: text,
      userId: Meteor.userId()
    })
  }
})
