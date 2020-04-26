import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-bootstrap'
import { ProgressBar, Card, Form, Button, FormGroup } from 'react-bootstrap'


class QuestionPreview extends Component {

    state = {
        answerSelected: null
    }
    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render() {
        const now = 60
        return (
            <div>

                {(this.props.authedUserAns === null) ? (
                    <Card className="preview-card mt-3">
                        <Card.Header>
                            <h4 className="preview-author">{this.props.username.name} asks:</h4>
                        </Card.Header>
                        <Card.Body>
                            <Image src={this.props.avatar} roundedCircle className="author-image" />


                            <div className="preview-container">
                                <h3>Would you rather</h3>
                                <Form onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Form.Check type="radio" id="optionOne" placeholder="Enter Option One Text Here"
                                            onChange={this.handleChange} >{this.props.optionOne}</Form.Check>
                                        <p className="preview-author mt-3">OR</p>
                                        <Form.Check type="radio" id="optionTwo" placeholder="Enter Option Two Text Here"
                                            onChange={this.handleChange} />
                                        <br />
                                        <br />
                                    </FormGroup>
                                    <Button variant="success" block type="submit">Submit</Button>
                                </Form>

                            </div>

                        </Card.Body>
                    </Card>
                ) : (
                        <Card className="preview-card mt-3">
                            <Card.Header>
                                <h4 className="preview-author">Asked by {this.props.username}</h4>
                            </Card.Header>
                            <Card.Body>
                                <Image src={this.props.avatar} roundedCircle className="author-image" />
                                <div className="preview-container">
                                    <h3>Results:</h3>
                               Would you rather {this.props.authedUserAns.text}?
                               {this.props.authedUserAns === 'optionOne'
                                        ? <div>
                                            <ProgressBar now={now} label={`${now}%`} />{this.props.optionOneVote} out of {this.props.votes} votes}
                                    <p className="preview-author mt-3">OR</p>
                                        </div>
                                        : <div>
                                            Hello</div>}</div>
                            </Card.Body>
                        </Card>

                    )}
            </div>

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
    const avatar = users[question.author].avatarURL
    let authedUserAns = null

    authedUserAns = users[authedUser].answers[question.id]

    const optionOneVote = question.optionOne.votes.length
    const optionTwoVote = question.optionTwo.votes.length
    const votes = optionOne + optionTwo

    return {
        optionOne,
        optionTwo,
        username,
        avatar,
        authedUserAns,
        optionOneVote,
        optionTwoVote,
        votes,

    }
}

export default connect(mapStateToProps)(QuestionPreview)