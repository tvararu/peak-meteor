import { Component } from 'react'
import Radium from 'radium'
import { Card, CardText, TextField } from 'mui'

@Radium
export default class Composer extends Component {
  render () {
    return <Card>
      <CardText>
        <TextField
          hintText='Post something interesting.'
          hintStyle={{ top: '13px' }}
          multiLine={ true }
          rows={ 2 }
          style={{ width: '100%' }}
        />
      </CardText>
    </Card>
  }
}
