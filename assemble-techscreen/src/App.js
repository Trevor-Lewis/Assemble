import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import OrderComplete from './components/OrderComplete'
import Header from './components/Header'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path='/' component={Cart}/>
        <Route exact path='/BillingShipping' component={Checkout}/>
        <Route exact path='/OrderComplete' component={OrderComplete}/>
      </div>
    );
  }
}

export default App;
