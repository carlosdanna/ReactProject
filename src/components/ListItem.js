"use strict";
import React from 'react';

class ListItem extends React.Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return (
      <tr>
        <td>{this.props.people.Firstname}</td>
        <td>{this.props.people.Lastname}</td>
        <td>{this.props.people.Email}</td>
        <td>{this.props.people.Description}</td>
        <td>{this.props.people.Active ? "Active" : "Inactive"}</td>
      </tr>
    );
  }
}

export default ListItem;
