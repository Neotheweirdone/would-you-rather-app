import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Card, Button } from 'react-bootstrap'
import Questions from './Questions'

class Home extends Component {

    state = {
        answered: false
    }

    handleTab = (data) => {
        this.setState(() => ({
            answered: data
        }))
    }
    render() {
        return (<div className="container">
            <Tabs
                id="HomePage"
                activeKey={this.state.answered}
                onSelect={this.handleTab}
            >
                <Tab eventKey="answered" title="Answered">

                </Tab>
                <Tab eventKey="unanswered" title="Unanswered">

                </Tab>

            </Tabs>

            {this.state.answered === "answered" ?
                (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                {this.props.answeredQuestions.map((id) => {
                                    return <Questions id={id} />
                                })}
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                ) : (<Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            {this.props.unansweredQuestions.map((id) => {
                                return <Questions id={id} />
                            })}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>)
            }
        </div>
        )
    }
}
function mapStateToProps({ questions, users, authedUser }) {
    const answeredQuestions = Object.keys(users[authedUser].answers)

    const unansweredQuestions = Object.keys(questions).filter(qid => {
        const match = answeredQuestions.filter((ansId) => ansId === qid)//need to check if the questions match
        if (match === undefined || match.length === 0)
            return qid



        return false

    })
    const answeredQuestionsByDate = answeredQuestions.sort((a, b) => (questions[a].timestamp - questions[b].timestamp) * -1)
    const unansweredQuestionsByDate = unansweredQuestions.sort((a, b) => (questions[a].timestamp - questions[b].timestamp) * -1)
    return {
        answeredQuestions: answeredQuestionsByDate,
        unansweredQuestions: unansweredQuestionsByDate
    }
}
export default connect(mapStateToProps)(Home)