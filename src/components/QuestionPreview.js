import React, { Component, Fragment } from 'react'
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
                        <Card className="preview-card mt-4">
                            <Card.Header>
                                <h4 className="preview-author">Asked by {this.props.username.name}</h4>
                            </Card.Header>
                            <Card.Body>
                                <h3>Results:</h3>
                                <Image src={this.props.avatar} roundedCircle className="author-image" />
                                <div className="preview-container">

                                <div className="card-position">

                                    Would you rather {this.props.question[this.props.authedUserAns].text}?
                               {this.props.authedUserAns === 'optionOne'
                                        ? <Fragment>
                                            <ProgressBar now={(this.props.optionOneVote/this.props.votes)*100} className="progress-template" />{this.props.optionOneVote} out of {this.props.votes} votes
                                    </Fragment>
                                        : <Fragment>
                                            <ProgressBar now={(this.props.optionTwoVote/this.props.votes)*100} className="progress-template" />{this.props.optionTwoVote} out of {this.props.votes} votes
                                        </Fragment>}</div>

<br/>
<br/>
                               Would you rather {(this.props.authedUserAns === "optionOne") ? this.props.question.optionTwo.text : this.props.question.optionOne.text}?
                               {this.props.authedUserAns === 'optionTwo'
                                    ? <Fragment>
                                        <ProgressBar now={(this.props.optionOneVote/this.props.votes)*100} className="progress-template" />{this.props.optionOneVote} out of {this.props.votes} votes
                                    </Fragment>
                                    : <Fragment>
                                        <ProgressBar now={(this.props.optionTwoVote/this.props.votes)*100} className="progress-template"/>{this.props.optionTwoVote} out of {this.props.votes} votes
                                        </Fragment>}
                                        </div>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>)
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
    const votes = optionOneVote + optionTwoVote

    return {
        optionOne,
        optionTwo,
        username,
        avatar,
        authedUserAns,
        optionOneVote,
        optionTwoVote,
        votes,
        question
    }
}

export default connect(mapStateToProps)(QuestionPreview)