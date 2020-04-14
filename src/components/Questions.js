import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Image, Button,Col} from 'react-bootstrap'


class Questions extends Component {
    render() {
        return (<div className="Question-container">
            
            <h4 className="preview-authorname">{this.props.name.name} asks:</h4>
            
            <Image src={this.props.name.avatarURL} roundedCircle className="author-image" />
            
            
            <div className="preview-container">
                <h3>Would you rather</h3>
        <p>...{this.props.excerpt}...</p>
        <br/>
        <Button variant="outline-primary">View Polls</Button>
            </div>
        </div>)
    }
}

function mapStateToProps({ questions, users, authedUser }, props) {

    let userId = null
    if (props.id) {
        userId = props.id
    } else {
       userId=this.params.match.id
    }

    const question = questions[userId]
    const excerpt = question.optionOne.text.length > 13 ? question.optionOne.text.substring(0, 14) : question.optionOne.text

    return {
        question,
        excerpt,
        name: users[question.author],
        authedUser:users[authedUser]
    }
}
export default connect(mapStateToProps)(Questions)