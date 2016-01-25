import Accounts from 'meteor/Accounts'
import 'lib/methods'
import './routes'

Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY'
})
