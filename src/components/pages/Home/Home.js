import React, { Component } from 'react';
import {Banner} from './Banner'
import SearchNav from '../../commons/SearchNav'
import LittleTitle from '../../commons/LittleTitle'
import GoodsList from '../../commons/GoodsList'

import '../../../styles/pages/Home/Home.scss'
class Home extends Component {
  render() {
    return (
      <div id="Home">
      		<Banner/>
      		<SearchNav/>
      		<LittleTitle info="节肢类" icon="iconfont icon-bihugecko"/>
      		<GoodsList info="jiezhi"/>
      		
      		<LittleTitle info="蛇类" icon="iconfont icon-she"/>
      		<GoodsList info="she"/>
      		
      		<LittleTitle info="蜥蜴类" icon="iconfont icon-bihugecko"/>
      		<GoodsList info="xiyi"/>
      		
      		<LittleTitle info="龟鳖类" icon="iconfont icon-tortoise"/>
      		<GoodsList info="guibie"/>
      		
      		<LittleTitle info="器材类" icon="iconfont icon-light1"/>
      		<GoodsList info="qicai"/>
      </div>
    );
  }
}

export default Home;