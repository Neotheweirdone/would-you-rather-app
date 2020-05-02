import React, { Component } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <Row id={user.key}>
            <Col xs={4}><Image src={user.avatarURL} roundedCircle className="author-image" /></Col>
            <Col xs={4}>
              <h4>{user.name}</h4>
              <br />
              <p>Answered Questions:{Object.keys(user.anwsers).length}</p>
              <p>Created Questions:{Object.keys(user.questions).length}</p>
            </Col>
            <Col>
              <h4>Score</h4>
              <h2>{user.score}</h2>
            </Col>
          </Row>
        ))}
      </div>
    )
  }
}

function mapStateToProps({ users }) {

  let usersByScore = Object.values(users).map(user => ({
    score: Object.keys(user.answers).length + Object.keys(user.questions).length,
    ...user
  })).sort((a, b) => a.score - b.score)
  return {
    users: usersByScore,
  }
}

export default connect(mapStateToProps)(Leaderboard)
