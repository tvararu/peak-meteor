import { PropTypes as ReactPropTypes } from 'react'

let PropTypes = Object.create(ReactPropTypes)

PropTypes.pk = {}

PropTypes.pk.email = PropTypes.shape({
  address: PropTypes.string.isRequired,
  verified: PropTypes.bool.isRequired
})

PropTypes.pk.user = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  emails: PropTypes.arrayOf(PropTypes.pk.email).isRequired
})

export default PropTypes
