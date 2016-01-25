"use strict";

import React from 'react';
import ListItem from './ListItem';

var people = [
  {"id": 1, "Firstname": "Antonio", "Lastname": "Figueroa", "Description": "Af", "Email": "af@gmail.com", "Active": false},
  {"id": 2, "Firstname": "Carlos", "Lastname": "Da", "Description": "CD", "Email": "CD@gmail.com", "Active": false},
  {"id": 3, "Firstname": "Patrick", "Lastname": "C", "Description": "PC", "Email": "pc@gmail.com", "Active": true},
];

class List extends React.Component {
  constructor(props){
    super(props);
    this.state ={};
  }

  render(){
    var listItem = people.map(function(item){
      return (<ListItem key={item.id} people={item} />);
    });
    return (
      <table className = 'table table-bordered table-hover table-striped'>
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Description</th>
            <th>Active</th>
          </tr>
        </thead>
        <tbody>
          {listItem}
        </tbody>
      </table>)
  }
};
export default List
