import Accounts from 'meteor/Accounts'
import 'App/lib/methods'
import './routes'

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY'
})
