"use strict";

import React from 'react';
import ListItem from './ListItem.jsx';

var ingredients = [{"id": 1, "text": "ham"},
                  {"id": 2, "text": "cheese"},
                  {"id": 3, "text": "potatoes"}];

class List extends React.createClass {
  constructor(props){
    super(props);
  }


  render(){
    var listItem = ingredients.map(function(item){
      return (<ListItem key={item.id} ingredient={item.text} />);
    });
    return (<ul>{listItem}</ul>)
  }
}

export default List;
