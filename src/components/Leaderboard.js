import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render () {
    return (
      <div>
          {}
        <Card className='preview-card mt-4'>
          <Card.Header>
            </Card.Header>
            {console.log(this.props.users)}
            <Card.Body>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

function mapStateToProps({users,authedUser,questions}){
    let score=null
    let usersByScore=Object.keys(users).map(user=>({
        score: user.answers.length + user.questions.length
    })).sort((a,b)=>score(a) - score(b) )

    return{
users:usersByScore,

    }
}

export default connect(mapStateToProps)(Leaderboard)
