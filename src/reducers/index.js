import Meteor from 'meteor'
import { bindReactiveData } from 'meteoredux'
import { Posts } from 'lib/collections'

const initialState = {}

const root = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const reactiveData = () => ({
  posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
  users: Meteor.users.find().fetch()
})

const rootReducer = bindReactiveData(root, reactiveData)

export default rootReducer
