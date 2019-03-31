import React, { Component } from 'react';

class SignIn extends Component {
    handleSubmit(e){
        e.preventDefault();
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

export default SignIn;