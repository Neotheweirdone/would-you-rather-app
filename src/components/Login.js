import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Card, Button, FormGroup, Form, Image,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import setAuthedUsers from '../actions/authedUser'
import { Redirect } from 'react-router';



class Login extends Component {

  state = {
    userSelected: 'select',
    toHome: false,
  }

  handleChange = (e) => {
    const curUser = e.target.value

    this.setState(() => ({
      userSelected: curUser,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { userSelected } = this.state


    if (userSelected !== 'select') {
      this.props.dispatch(setAuthedUsers(userSelected))

      this.setState(() => ({
        userSelected: 'select',
        toHome: true,
      }))
    }
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <Card className="app-container">
        <Card.Title>
          <h2 className="center">Welcome to Would You Rather!</h2>
          <p className="center">Please sign in to continue</p>
        </Card.Title>
        <Card.Body>
          <Image width="50%" height="122" src="/Redux.svg" alt="React image" />
          <h3 className="center">Sign in</h3>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup >
              <Form.Label placeholder="select" >
                <Form.Control as="select" onChange={e => this.handleChange(e)}>
                  <option value='select' key='select'>Select User</option>
                  {this.props.users.map((user) => {
                    return <option value={user.id} key={user.id}>{user.name}</option>
                  })}
                </Form.Control>

              </Form.Label>
            </FormGroup>
            <Button type="submit" >Sign In</Button>
          </Form>
        </Card.Body>
      </Card>
    )
  }
}

function mapStateToProps({ users }) {
  const userIds = Object.keys(users)
  const myUsers = userIds.map(id => ({//id here is the loop number iteration
    id: users[id].id,
    name: users[id].name
  }))

  return {
    users: myUsers
  }
}

export default connect(mapStateToProps)(Login)