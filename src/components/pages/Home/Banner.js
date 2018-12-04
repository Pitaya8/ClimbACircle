import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Carousel, WingBlank } from 'antd-mobile';
//引入路由
import {HashRouter} from 'react-router-dom';
import {Route,NavLink,Redirect,Switch} from 'react-router-dom';
//引入样式
import '../../../styles/common/Banner.scss'

export class Banner extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
		    data: ['1', '2', '3','4','5'],
		    imgHeight: 176,
		}
	}
	componentDidMount() {
	    // simulate img loading
	    setTimeout(() => {
	        this.setState({
	            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI'],
	        });
	    }, 100);
	}
	render(){
		return (<div className="Banner">
			<WingBlank>
		        <Carousel
		          autoplay={false}
		          infinite
		        >
		          {this.state.data.map(val => (
		            <a
		              key={val}
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		            >
		              <img
		                src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
		                alt=""
		                style={{ width: '100%', verticalAlign: 'top' }}
		                onLoad={() => {
		                  // fire window resize event to change height
		                  window.dispatchEvent(new Event('resize'));
		                  this.setState({ imgHeight: 'auto' });
		                }}
		              />
		            </a>
		          ))}
		        </Carousel>
		      </WingBlank>
          </div>
		)
	}
}