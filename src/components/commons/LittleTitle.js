import React, { Component } from 'react';
import '../../styles/common/LittleTitle.scss'

class LittleTitle extends Component {
  render() {
    return (
      <div id="LittleTitle">
      		<p>——
      			<i className={this.props.icon}></i>
      			&nbsp;
	      		<strong>{this.props.info}
	      		</strong>&nbsp;——
      		</p>
      		<span>更多 ></span>
      </div>
    );
  }
  componentDidMount(){
  	console.log(document.querySelector('#LittleTitle p strong').innerHTML)
  }
}

export default LittleTitle;