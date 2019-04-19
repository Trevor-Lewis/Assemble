import React, { Component } from "react";
import "./Product.css";

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 },
        { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 },
        { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }
      ]
    };
  }

  render() {
    return (
      <div className="products">
          <div className="product a">
            <h1>
              {this.state.products.map(product => (
                <div><h1>{product.name}</h1> <h5>SKU# {product.sku}</h5></div>
              ))}
            </h1>
          </div>
        <div className="product b">
          <h1>
            {this.state.products.map(product => (
              <h3>{product.quantity}</h3>
            ))}
          </h1>
        </div>
        <div className="product c">
          <h1>
            {this.state.products.map(product => (
              <h3>${product.unitPrice}</h3>
            ))}
          </h1>
        </div>
      </div>
    );
  }
}
