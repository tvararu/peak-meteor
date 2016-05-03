import _ from 'lodash'
import React, { Component } from 'react'
// import gravatar from 'gravatar'
import Meteor from 'meteor'
import Radium from 'radium'
import reactMixin from 'react-mixin'
import ReactMeteorData from 'meteor/ReactMeteorData'
import PropTypes from 'lib/PropTypes'
// import {
//   Card,
//   CardHeader,
//   CardText
// } from 'material-ui'

// const Description = ({ content }) => {
//   return <div>
//     { content.split('\n').map((c, idx) => <span key={ idx }>{c}<br /></span>) }
//   </div>
// }

@reactMixin.decorate(ReactMeteorData)
class UserProfile extends Component {
  state = {
    stream: null,
    streamSrc: null,
    friendStream: null,
    friendStreamSrc: null
  };

  static propTypes = {
    params: PropTypes.any
  };

  static defaultProps = {
    params: {
      id: null
    }
  };

  constructor (props) {
    super(props)

    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia

    if (navigator.getUserMedia) {
      navigator.getUserMedia({video: true}, handleVideo, videoError)
    }

    var self = this
    function handleVideo (stream) {
      self.setState({
        stream: stream,
        streamSrc: window.URL.createObjectURL(stream)
      })
    }

    function videoError (e) {
      // do something
    }

    _.bindAll(
      this,
      'handleClick'
    )

    if (typeof window !== 'undefined') {
      window.peer.on('call', (call) => {
        call.answer(this.state.stream)
      })
    }
  }

  getMeteorData () {
    return {
      user: Meteor.users.findOne(this.props.params.id)
    }
  }

  handleClick () {
    const call = window.peer.call(this.props.params.id, this.state.stream)
    call.on('stream', (friendStream) => {
      this.setState({
        friendStream: friendStream,
        friendStreamSrc: window.URL.createObjectURL(friendStream)
      })
    })
  }

  render () {
    // let email = ''
    // let avatarUrl = ''
    // let title = ''
    // let description = ''
    // const author = this.data.user
    // if (author) {
    //   if (author.emails) {
    //     email = author.emails[0].address
    //     avatarUrl = gravatar.imageUrl(email)
    //   }
    //   if (author.profile) {
    //     if (author.profile.title) {
    //       title = author.profile.title
    //     }
    //     if (author.profile.description) {
    //       description = author.profile.description
    //     }
    //   }
    // }

    // return <div style={{
    //   margin: '0 auto',
    //   maxWidth: '600px',
    //   padding: '0 10px 10px 10px'
    // }}>
    //   <Card style={{ paddingBottom: '16px' }}>
    //     <CardHeader
    //       avatar={ avatarUrl }
    //       subtitle={ title }
    //       title={ email }
    //     />
    //     <CardText>
    //       <Description content={ description } />
    //     </CardText>
    //   </Card>
    // </div>
    return <div onClick={ this.handleClick }>
      <video src={ this.state.friendStreamSrc } autoPlay='true' style={{
        height: '100%',
        width: '100vw',
        background: '#666',
        marginTop: '-10px'
      }} />
      <video src={ this.state.streamSrc } autoPlay='true' style={{
        height: '180px',
        width: '240px',
        background: '#666',
        position: 'absolute',
        right: '0',
        bottom: '0'
      }} />
    </div>
  }
}

export default Radium(UserProfile)
