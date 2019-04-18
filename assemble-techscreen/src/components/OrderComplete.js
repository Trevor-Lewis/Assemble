import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class OrderComplete extends Component {


  render() {
      return(
        <div className="cart">
            <Link to="www.amazon.com">Go Home</Link>
        </div>
      );
  };
};
