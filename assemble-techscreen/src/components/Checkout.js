import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class CheckOut extends Component {


  render() {
      return(
        <div className="cart">
            <Link to="/OrderComplete">PLACE ORDER</Link>
        </div>
      );
  };
};
