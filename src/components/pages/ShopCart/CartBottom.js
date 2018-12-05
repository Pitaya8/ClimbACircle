import React, { Component } from 'react';
import '../../../styles/pages/ShopCart/CartBottom.scss'
class CartBottom extends Component {
  render() {
    return (
      <div id="CartBottom">
      	 <div id="sele"></div>
      	 <p>
      	 	全选
      	 	<span>总计:￥0</span>
      	 </p>
      	 <input type="botton" value="编辑" />
      	 <input type="botton" value="结算" />
      </div>
    );
  }
}

export default CartBottom;