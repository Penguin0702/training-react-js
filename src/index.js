import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux'


import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import HomePage from './components/HomePage';
import Main from './components/Main';
import Account from './components/Account';
import Nav from './components/Nav';
import Transaction from './components/Transaction';

var username = (state = null, action) => {
    switch (action.type) {
        case 'LOG_IN':
            return action.username;
        case 'LOG_OUT':
            return null;
        default:
            return state;
    }
}
var reducer = combineReducers({ username });
var store = createStore(reducer);
// console.log(store.getState());
store.dispatch({ type: 'LOG_IN', username: 'penguin' });
// console.log(store.getState());
// store.dispatch({ type: 'LOG_OUT' });
// console.log(store.getState());

var isLoggedIn = () => {
    return store.getState().username ? true : false;
}
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Main>
                <Route path="/" exact component={HomePage} />
                <Route path='/account' component={Account}/>
                <Route path='/transaction' render={() => {
                    return isLoggedIn() ? <Transaction /> : <Redirect to="/" />
                }} />
            </Main>
        </Router>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
