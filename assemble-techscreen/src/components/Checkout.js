import React, { Component } from "react";
import { Link } from "react-router-dom";
import Credit from "./CreditForm";
import "../App.css";
import "./Checkout.css";

export default class CheckOut extends Component {
  render() {
    return (
      <div className="cart">
        <div className="header">
          <h1>Check Out</h1>
        </div>
        <div className="container">
          <div className="pforms">
            <h2>Payment Information</h2>
            <Credit />
          </div>
          <div className="pforms">
            <h2>Shipping Address</h2>
          </div>
        </div>
        <div className="footer">
          <h2>SUBTOTAL</h2>
          <Link className="button" to="/OrderComplete">
            PLACE ORDER
          </Link>
        </div>
      </div>
    );
  }
}
