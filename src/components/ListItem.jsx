"use strict";
import React from 'react';

class ListItem extends React.createClass {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
};

export default ListItem;
