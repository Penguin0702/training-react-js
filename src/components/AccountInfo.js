import React, { Component } from 'react';
import { connect} from 'react-redux';

class AccountInfo extends Component {
    logOut(e){
        e.preventDefault();
        var {dispatch} = this.props;
        dispatch ({type: 'LOG_OUT'});
    }
    render() {
        return (
            <div>
                <h1>Your Account</h1>
                <p>Username: {this.props.username}</p>
                <a href="#" onClick={this.logOut.bind(this)}>Log Out</a>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        username: state.username
    }
}
export default connect(mapStateToProps)(AccountInfo);