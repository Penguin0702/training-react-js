import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignIn extends Component {
    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var {username, password} = this.refs;
        if (username.value === 'penguin' && password.value === '123456'){
            dispatch({ type: 'LOG_IN', username: 'penguin' });
        }
        console.log('Submit');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" placeholder="Username" ref="username"/>
                    <br/><br/>
                    <input type="password" placeholder="Password" ref="password"/>
                    <br/><br/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        );
    }
}

export default connect()(SignIn);