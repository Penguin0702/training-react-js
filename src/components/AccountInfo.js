import React, { Component } from 'react';
import { connect} from 'react-redux';

class AccountInfo extends Component {
    render() {
        return (
            <div>
                <h1>Your Account</h1>
                <p>Username: {this.props.username}</p>
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