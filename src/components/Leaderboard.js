import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

class Leaderboard extends Component {
  render () {
    return (
      <div>
          
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

function mapStateToProps({users}){
    
    let usersByScore=Object.values(users).map(user=>({
       score:   Object.keys(user.answers).length + Object.keys(user.questions).length,
       ...users
    })).sort((a,b)=>a.score - b.score )
    return{
users:usersByScore,

    }
}

export default connect(mapStateToProps)(Leaderboard)
