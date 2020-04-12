import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  Card, CardImg, Label, CardBody,
  CardTitle, Button, FormGroup, Form, Input
} from 'reactstrap';
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
        <CardTitle>
          <h2 className="center">Welcome to Would You Rather!</h2>
          <p className="center">Please sign in to continue</p>
        </CardTitle>
        <CardBody>
          <CardImg width="50%" height="122" src="/Redux.svg" alt="React image" />
          <h3 className="center">Sign in</h3>
          <Form>
            <FormGroup >
              <Label componentClass="select" placeholder="select" onChange={e => this.handleChange(e)}>
                <Input type="select" name="select" style={{
                  
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}  >
                  {this.props.users.map((user) => {
                    return <option value={user.id} key={user.id}>{user.name}</option>
                  })}

                </Input>
              </Label>
            </FormGroup>
            <Button type="submit" block onSubmit={this.handleSubmit}>Sign In</Button>
          </Form>
        </CardBody>
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