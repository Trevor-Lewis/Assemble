import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Order.css'
import '../App.css'

export default class OrderComplete extends Component {


  render() {
      return(
        <div className="complete">
            <div className="head">
                <h1>Order Complete</h1>
            </div>
            <div className="center">
                <h2>Hooray! Way to order those products.</h2>
            <Link className="button" to="/">Go Home</Link>
            </div>
        </div>
      );
  };
};
