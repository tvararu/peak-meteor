import Meteor from 'meteor'
import { createStore } from 'redux'
import { connectToMeteor } from 'meteoredux'
import reducers from 'reducers'

const store = createStore(reducers)

Meteor.subscribe('posts')
Meteor.subscribe('users')

connectToMeteor(store)

export default store
