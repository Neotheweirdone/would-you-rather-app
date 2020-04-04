import React, { Component } from 'react'
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

class Login extends Component {

    render() {

        return (

            <div className="container" >

                <div className="col-lg-12 col-md-12 col-sm-12" style={{ marginTop: "5vh", marginBottom: "5vh" }}>
                    <h1 className="text-center">
                        Login
        </h1>
                    <p className="text-center">Select one user</p>
                </div>
                <div className="row">
                    {
                        this.props.users !== null && Object.values(this.props.users).map(user =>
                            (
                                <div className="col-lg-4 col-md-4 col-xs-6 col-sm-6" key={user.id}>
                                    <div className="center" style={{ width: "18rem" }}>
                                        <img className="card-img-top-center" style={{ height: "250px" }} src={user.avatarURL} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className='card-title'>{user.name}</h5>
                                        </div>
                                    </div>
                                </div>

                            ))

                    }
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-center" >


                    <button style={{ marginRight: "15px" }} className="btn btn-outline-danger btn-lg">Clear selection</button>


                    <button className="btn btn-outline-success btn-lg">Login</button>


                </div>




            </div>

        )


    }

}


function mapStateToProps({ users }) {


    return {
        users
    }
}
export default connect(mapStateToProps)(Login)