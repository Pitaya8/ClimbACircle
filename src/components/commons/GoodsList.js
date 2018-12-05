import React, { Component } from 'react';
import '../../styles/common/GoodsList.scss'
import axios from 'axios'
//配置baseUrl
axios.defaults.baseURL="http://127.0.0.1:7000";
class GoodsList extends Component {
	constructor(props) {
	    super(props);
	    this.state={
	    	list:[]
	    }
	}
	componentWillMount(){
  	axios.post('/api/goods/goods_list',{type:this.props.info})
  	.then((res)=>{
  		this.setState({"list":res.data})
  	})
  	.catch((err)=>{
  		console.log(err)
  	})
  }
  render() {
    return (
      <div id="GoodsList">
      	<ul>
      		{
				this.state.list.map((item,idx)=>(
					<li key={item.id} name={item.id}>
		      			<img src={item.img}  alt=""/>
		      			<p>
		      			{item.title}
		      			</p>
		      			<span>
		      				￥{item.price}
		      			</span>
		      		</li>
		      		)
				)
      		}
      	</ul>
      </div>
    );
  }
  
}

export default GoodsList;