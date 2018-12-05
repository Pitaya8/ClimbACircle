import React, { Component } from 'react';
import '../../../styles/pages/ShopCart/NullGoods.scss'

//引入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart)

class NullGoods extends Component {
  render() {
    return (
      <div id="NullGoods">
      	<div>
      		<FontAwesomeIcon icon="shopping-cart" />
      	</div>
      	<p>
      		购物车还是空的哦
      	</p>
      </div>
    );
  }
}

export default NullGoods;