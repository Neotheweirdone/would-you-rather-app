import React, { Component } from 'react'
import {Navbar,Button,Nav ,NavLink} from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import {connect} from 'react-redux'

class NavHead extends Component {


    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="nav-preview">
                        <Link className="d-inline p-2 bg-dark text-white" to="/">Home</Link>
                        <Link className="d-inline p-2 bg-dark text-white" to="/add">New Question</Link>
                        <Link className="d-inline p-2 bg-dark text-white" to="/leaderboard">Leaderboard</Link>
                        </Nav>
                     
                           <button className="button-preview" >Logout</button>
                           
                       
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

function mapStateToProps({authedUser}){

    return{

    }
}
export default connect(mapStateToProps)(NavHead)