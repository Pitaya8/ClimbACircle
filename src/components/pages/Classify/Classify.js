import React, { Component } from 'react';
import SearchNav from '../../commons/SearchNav'
import '../../../styles/pages/Classify/Classify.scss'

//引入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart)

class Classify extends Component {
	constructor(props) {
	    super(props);
			this.state={
				list:[
					{
						tilte:"龟鳖类",
						icon:"iconfont icon-tortoise"
					},
					{
						tilte:"蜥蜴类",
						icon:"iconfont icon-bihugecko"
					},
					{
						tilte:"蛇类",
						icon:"iconfont icon-she"
					},
					{
						tilte:"两栖类",
						icon:"iconfont icon-Frog"
					},
					{
						tilte:"节肢类",
						icon:"iconfont icon-CrawlerInfo"
					},
					{
						tilte:"器材类",
						icon:"iconfont icon-light1"
					},
					{
						tilte:"口粮",
						icon:"iconfont icon-rice"
					}
				]
			}
	}
  render() {
    return (
      <div id="Classify">
      	<SearchNav/>
				<div id="ClassifyContent">
					<ul>
					{
						this.state.list.map((val,idx)=>(
	  						<li key={idx}>
	  							<i className={val.icon}></i>
	  							<p>{val.tilte}</p>
					  		</li>	
							)
  						)
					}
						
					</ul>
				</div>
      </div>
    );
  }
}

export default Classify;