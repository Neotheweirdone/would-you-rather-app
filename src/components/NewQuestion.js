import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Form, Button } from 'react-bootstrap'

class NewQuestion extends Component {

    state = {
        text1: '',
        text2: '',
    }

    handleChange = (e1) => {
        const text1 = e1.target.value
        
        this.setState(() => ({
            text1: text1,
            
        }))
    }

    handleChangenew=(e2)=>{
        const text2 = e2.target.value
        
        this.setState(() => ({
           
            text2: text2
        }))
    }
    render() {
        return (<div>
            <Card className="preview-card-question">
                <Card.Header>
                    <h4 className="preview-author">Create New Question</h4>
                </Card.Header>
                <Card.Body>

                    <Card.Text >
                        <p className="question-preview mt-5">Complete the question:
                       <br />
                            <br />

                       WOULD YOU RATHER...
                       </p>
                        <Form >
                            <Form.Control type="text" placeholder="Enter Option One Text Here" value={this.state.text1}
                                onChange={this.handleChange} />
                            <p className="preview-author mt-3">OR</p>
                            <Form.Control type="text" placeholder="Enter Option Two Text Here" value={this.state.text2}
                                onChange={this.handleChangenew} />
                            <br />
                            <br />
                            <Button variant="success" block>Submit</Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>)
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    return {

    }
}

export default connect(mapStateToProps)(NewQuestion)