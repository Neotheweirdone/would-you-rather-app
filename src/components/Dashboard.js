import React,{Component} from 'react'
import {connect} from 'react-redux';
import Login from './Login';


class Dashboard extends Component{
 
    render(){
        return(<div>
            
     
       
                 <Login />
               
            
           
</div>
            
        )
        }}

function mapStateToProps({users}){
    return{
        userIds:Object.keys(users).sort((a,b)=>users[b].answers-users[a].answers)
    }
  }

  export default connect(mapStateToProps)(Dashboard)
