import React, { Component } from 'react';
import CartBottom from './CartBottom'
import NullGoods from './NullGoods'
class ShopCard extends Component {
  render() {
    return (
      <div id="ShopCard">
      	<NullGoods/>
      	<CartBottom/>
      </div>
    );
  }
}

export default ShopCard;