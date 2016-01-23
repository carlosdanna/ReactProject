"use strict";
import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <li>
        <h4>{this.props.ingredient}</h4>
      </li>
    );
  }
}

export default ListItem;
