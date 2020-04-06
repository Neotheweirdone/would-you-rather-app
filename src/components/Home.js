import React, { Component } from 'react'
import { Tabs,Tab } from 'react-bootstrap'
import {connect} from 'react-redux'


class Home extends Component {

    state = {
        answered:false
    }

    handleTab = (data) => {
        this.setState(() => ({
            answered:data
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
                    Hi
                </Tab>
                <Tab eventKey="unanswered" title="Unanswered">
                    Hello
                </Tab>

            </Tabs>

{this.state.answered==="answered"?{

}:{}}
        </div>

        )
    }
}
function mapStateToProps({questions}){
    return{
        questions
    }
}
export default connect(mapStateToProps)(Home)