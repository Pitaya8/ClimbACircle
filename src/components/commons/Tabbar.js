import React,{Component} from 'react';
import { TabBar } from 'antd-mobile';
//引入路由
import {Route,Redirect,Switch,withRouter} from 'react-router-dom';
//引入组件
import Home from '../pages/Home/Home'
import Classify from '../pages/Classify/Classify'
import Me from '../pages/Me/Me'
import ShopCart from '../pages/ShopCart/ShopCart'
//引入tabbar
import '../../../node_modules/antd-mobile/dist/antd-mobile.css';
import '../../styles/common/Tabbar.scss'
//引入font-awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faHome,
	faListAlt,
	faShoppingCart,
	faUser
} from '@fortawesome/free-solid-svg-icons';
library.add(faHome,faListAlt,faShoppingCart,faUser )




export class Tabbar extends Component{
	 constructor(props) {
	    super(props);
	    this.state = {
	    	tabs:[{
	    		title:"首页",
	    		icon:'home',
	    		path:'/home'
	    	},
	    	{
	    		title:"类别",
	    		icon:'list-alt',
	    		path:'/classify'
	    	},
	    	{
	    		title:"购物车",
	    		icon:'shopping-cart',
	    		path:'/shopCart'
	    	},
	    	{
	    		title:"我",
	    		icon:'user',
	    		path:'/me'
	    	}
    		],
	    		currentTab:0
	    }
	  }
	componentDidMount(){
		let hash=window.location.hash.slice(1);
		//找出对应索引值
		let currentTab=0;
		this.state.tabs.some((item,idx)=>{
			currentTab=idx;
			return item.path===hash
		});
		this.setState({
			currentTab
		})
	}
	handlerClick(idx,path){
		this.setState({
			currentTab:idx
		})
		if(idx===1){
			
		}
		//编程式导航
		this.props.history.push(path)
	}
	render(){
		return (
			<div className="box">
			<Switch>
            	<Route path="/home" component={Home}/>
            	<Route path="/classify" component={Classify}/>
            	<Route path="/shopCart" component={ShopCart}/>
            	<Route path="/me" component={Me}/>
            	<Redirect from="/" to="/home" exact/>
           </Switch>
		
			<TabBar
				tintColor='#229200'
				noRenderContent="true"
			>
			{
				this.state.tabs.map((tab,idx)=>{
					return <TabBar.Item
			            title={tab.title}
			            key={tab.path}  //唯一标识
			            icon={<FontAwesomeIcon icon={tab.icon} />}
			            selected={this.state.currentTab === idx}  //是否选中
			            selectedIcon={
			            	<FontAwesomeIcon icon={tab.icon} />
			            }
			            onPress={
			            	this.handlerClick.bind(this,idx,tab.path)
			            }
			          >
		            </TabBar.Item>
				})
			}
          </TabBar>
          </div>
		)
	}
}
Tabbar=withRouter(Tabbar);