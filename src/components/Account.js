import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn';
import AccountInfo from './AccountInfo';

class Account extends Component {
    render() {
        var username = this.props.username;
        console.log(username)
        return username ? <AccountInfo/> : <SignIn/>
    }
}
const mapStateToProps = (state) => {
    return {
        username: state.username,
    }
}
export default connect(mapStateToProps)(Account)