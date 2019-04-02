import React, { Component } from 'react';
import './HomePage.css';
import axios from 'axios';

class HomePage extends Component {
    handleRequest(){
    //     axios.get("http://localhost:5000/try")
    //     .then(result =>result.data)
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));
   
        axios.post("http://localhost:5000/axios", {username:'penguin'})
        .then(res => console.log(res.data))
        .catch(error => console.log(error));
    }
    render() {
        return (
            <div className="home-page-title">
                <h2>This is Home Page!!</h2>
                <button onClick={this.handleRequest.bind(this)}>Request</button>
            </div>
        );
    }
}

export default HomePage;