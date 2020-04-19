import React,{Component} from 'react'
import {connect} from 'react-redux'
import { Card } from 'react-bootstrap'

class NewQuestion extends Component{
    render(){
        return(<div>
<Card className="preview-card mt-3">
                <Card.Header>
                    <h4 className="preview-author">Create New Question</h4>
                </Card.Header>
                <Card.Body>

                    <Card.Text >
                       Complete the question

                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>)
    }
}

export default connect()(NewQuestion)