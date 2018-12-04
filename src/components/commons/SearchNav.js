import React, { Component } from 'react';
import '../../styles/pages/SearchNav.scss'

class SearchNav extends Component {
  render() {
    return (
      <div id="SearchNav">
      	   <div>搜索<i className="fa fa-search" aria-hidden="true"></i></div>
      </div>
    );
  }
}

export default SearchNav;