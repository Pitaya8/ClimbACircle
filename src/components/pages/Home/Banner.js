import React,{Component} from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
//引入样式
import '../../../styles/common/Banner.scss'

export class Banner extends Component{
	constructor(props) {
	    super(props);
	    this.state = {
		    data: ['https://gd2.alicdn.com/imgextra/i3/139844398/TB2at0lj9FjpuFjSszhXXaBuVXa_!!139844398.jpg_400x400.jpg_.webp', '//gd2.alicdn.com/imgextra/i4/2406210947/TB2rnhwhZuYBuNkSmRyXXcA3pXa_!!2406210947.jpg_400x400.jpg', 'https://gd1.alicdn.com/imgextra/i3/3225586360/TB2phVjuIj_B1NjSZFHXXaDWpXa_!!3225586360.jpg_400x400.jpg_.webp','https://gd2.alicdn.com/imgextra/i2/2447787521/O1CN01KeAKAC25QfHy1ES93_!!2447787521.jpg_400x400.jpg_.webp','https://gd4.alicdn.com/imgextra/i4/1651436538/O1CN011yARwnr7whY7OLA_!!1651436538.jpg_400x400.jpg_.webp'],
		    imgHeight: 176,
		}
	}
	componentDidMount() {
	    // simulate img loading
//	    setTimeout(() => {
//	        this.setState({
//	            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI', 'IJOtIlfsYdTyaDTRVrLI'],
//	        });
//	    }, 100);
	    document.querySelector('.am-wingblank').style.marginLeft=0;
	    document.querySelector('.am-wingblank').style.marginRight=0;
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
		              href="www.baidu.com"
		              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
		            >
		              <img
		                src={val}
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