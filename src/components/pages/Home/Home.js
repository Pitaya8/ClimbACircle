import React, { Component } from 'react';
import {Banner} from './Banner'
import SearchNav from '../../commons/SearchNav'
import LittleTitle from '../../commons/LittleTitle'
class Home extends Component {
  render() {
    return (
      <div id="Home">
      		<Banner/>
      		<SearchNav/>
      		<LittleTitle/>
      </div>
    );
  }
}

export default Home;