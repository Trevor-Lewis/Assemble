import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Product from './Product'
import './Cart.css'
import './App.css'

export default class Cart extends Component {

  render() {
      return(
        <div className="cart">
            <div className="header">
                <h1>Your Cart</h1>
                <div className="sub-header">
                    <h2>QUANTIY</h2>
                    <h2>PRICE</h2>
                </div>
            </div>
            <Product/>
            <div className="footer">
            <h2>SUBTOTAL</h2>
            <Link className="button" to="/BillingShipping">Check Out</Link>
            </div>
        </div>
      );
  };
};
