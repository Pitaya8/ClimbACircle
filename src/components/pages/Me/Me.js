import React, { Component } from 'react';
import MeBottom from './MeBottom'
import '../../../styles/pages/Me/Me.scss'

//引入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
library.add(faShoppingCart)



class Me extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    		indentList:[
	    			{
	    				title:'待付款',
	    				icon:'iconfont icon-wallet1'
	    			},
	    			{
	    				title:'代发货',
	    				icon:'iconfont icon-truck'
	    			},
	    			{
	    				title:'待收货',
	    				icon:'iconfont icon-box'
	    			},
	    			{
	    				title:'已完成',
	    				icon:'iconfont icon-finish-'
	    			},
	    			{
	    				title:'售后',
	    				icon:'iconfont icon-shouhou'
	    			}
	    		],
	    		showList:[
	    			{
	    				title:'我的卡券',
	    				icon:'iconfont icon-card',
	    				color:'#1296DB'
	    			},
	    			{
	    				title:'我的优惠券',
	    				icon:'iconfont icon-youhui3',
	    				color:'#FF7920'
	    			},
	    			{
	    				title:'领券中心',
	    				icon:'iconfont icon-youhui3',
	    				color:'#FF4444'
	    			},
	    			{
	    				title:'我的收藏',
	    				icon:'iconfont icon-start',
	    				color:'#FFAE34'
	    			},
	    			{
	    				title:'我的兑换',
	    				icon:'iconfont icon-youhui3',
	    				color:'#FF7920'
	    			},
	    			{
	    				title:'收获地址',
	    				icon:'iconfont icon-activity_place_icon',
	    				color:'#64B4FF'
	    			},
	    			{
	    				title:'绑定手机号',
	    				icon:'iconfont icon-connect',
	    				color:'#64B4FF'
	    			},
	    			{
	    				title:'关于爬圈',
	    				icon:'iconfont icon-inf',
	    				color:'#64B4FF'
	    			}
	    		]
			}
	}
  render() {
    return (
      <div id="Me">
      
      	<div className="MeTop">
      		<div className="HeadPortraits">
      			<img src="https://gd2.alicdn.com/imgextra/i3/3225586360/TB2phVjuIj_B1NjSZFHXXaDWpXa_!!3225586360.jpg_400x400.jpg_.webp" alt=""/>
      		</div>
      		<span>用户名</span>
      	</div>
      	
      	<div className="MeBar">
      		<ul>
      			<li>
      				<i className='iconfont icon-wallet wallet'></i>
      				<p>钱包</p>
      			</li>
      			<li>
      				<p>0</p>
      				<i className='iconfont icon-cent'></i>
      				积分
      			</li>
      		</ul>
      	</div>
      	
      	<div className="indentList">
      			<h2>我的订单</h2>
      			<ul>
      				{
      					this.state.indentList.map((val,idx)=>(
      						<li key={idx}>
      							<i className={val.icon}></i>
      							<p>{val.title}</p>
						  		</li>	)
      					)
		          }
      			</ul>
      	</div>
      	
      	<div className="showList">
      		<ul>
      			{
	  					this.state.showList.map((val,idx)=>(
	  						<li key={idx} style={{color:val.color}}>
	  							<i className={val.icon}></i>
	  							<p>{val.title}</p>
						  		</li>	)
	  					)
	          }
      		</ul>
      	</div>
      	
      	<MeBottom/>
      </div>
    );
  }
  
  componentDidMount(){
  	
  }
}

export default Me;