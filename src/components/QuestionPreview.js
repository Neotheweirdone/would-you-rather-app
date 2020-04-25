import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
import { Card, Form, Button, FormGroup } from 'react-bootstrap'


class QuestionPreview extends Component {

    state={
        answerSelected:null
    }
    handleChange=()=>{
        
    }

    handleSubmit=()=>{

    }

    render() {
        return (<Card className="preview-card mt-3">
            <Card.Header>
                <h4 className="preview-author">{this.props.username} asks:</h4>
            </Card.Header>
            <Card.Body>
                <Image src={this.props.avatar} roundedCircle className="author-image" />


                <div className="preview-container">
                    <h3>Would you rather</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Form.Check type="radio" placeholder="Enter Option One Text Here" 
                                onChange={this.handleChange} >{this.props.optionOne}</Form.Check>
                            <p className="preview-author mt-3">OR</p>
                            <Form.Check type="radio" placeholder="Enter Option Two Text Here" 
                                onChange={this.handleChange} />
                            <br />
                            <br />
                        </FormGroup>
                        <Button variant="success" block type="submit">Submit</Button>
                    </Form>

                </div>

            </Card.Body>
        </Card>
        )
    }
}
function mapStateToProps({ users, questions, authedUser }, props) {

    let userId = null
    if (props.id) {
        userId = props.id
    } else {
        userId = props.match.params.id
    }

    const question = questions[userId]
    const optionOne = question.optionOne.text
    const optionTwo = question.optionTwo.text
    const username = users[question.author]
const avatar=users[question.author].avatarURL
    return {
        optionOne,
        optionTwo,
        username,
        avatar
    }
}

export default connect(mapStateToProps)(QuestionPreview)