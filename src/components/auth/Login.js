import React, { Component } from 'react'
import { connect } from "react-redux";
import { logIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom";
class Login extends Component {
    state={
        email:'',
        password:''
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
       this.props.logIn(this.state)
    }
    render() {
    
        const { authError,auth}=this.props
        if(auth.uid) 
        return <Redirect to='/' />
    
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h5 className="gey-text text-darken-3">
                        LogIn
                    </h5>
                    <div className="input-field">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn black lighten-1 z-depth-0">
                            LogIn
                        </button>
                        <div className="red-text center">
                        {authError ? <p>{authError}</p> : null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

 const mapStateToProps = (state) => {
     return{
         authError:state.auth.authError,
         auth:state.fireBaseData.auth
     }
    
}

const mapDispatchToProps = (dispatch) => {
    return{
        logIn:(creds)=>dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Login)