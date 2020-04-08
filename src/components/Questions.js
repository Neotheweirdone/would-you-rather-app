import React,{Components} from 'react'
import {connect} from 'react-redux'

class Questions extends Components{
    render(){
    return(<div>

    </div>)
}}

function mapStateToProps({Questions, users, authedUser}){
    const QuestionIds=Object.keys(Questions)
   
    return{

    }
}
export default connect(mapStateToProps)(Questions)