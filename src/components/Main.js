import React, { Component } from 'react';
import Nav from './Nav';

class Main extends Component {
    render() {
        return (
            <div>
                <h1>Main</h1>
                <Nav />
                {this.props.children}
            </div>
        );
    }
}

export default Main;