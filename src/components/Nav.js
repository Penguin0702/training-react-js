import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom';
class Nav extends Component {
    render() {
        return (
            <div>
                <ul> 
                    <li><NavLink to="/" activeClassName="active" exact>HomePage</NavLink></li>
                    <li><NavLink to="/account" activeClassName="active" exact>Account</NavLink></li>
                    <li><NavLink to="/transaction" activeClassName="active" exact>Transaction</NavLink></li>
                </ul>
            </div>
        );
    }
}

export default Nav;