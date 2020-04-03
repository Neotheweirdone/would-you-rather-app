import React,{Component} from 'react'
import {connect} from 'react-redux';


class Login extends Component{
    listUsers(){
        return Object.keys(this.props.users).map((user)=>{
            return(
            <li key={user.id}>{user.name}</li>
            )
    })
    }
    render(){
        return(<div>
           <h1 className='center'> Login</h1>
           <p>Welcome to the Would you rather App!</p>
           <p>Select an user</p>
        <ul>{this.listUsers()}</ul>
        </div>
        )
    }
}

function mapStateToProps({users}){
    return{
        users
    }
}
export default connect(mapStateToProps)(Login)