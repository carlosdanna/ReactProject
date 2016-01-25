"use strict";

import React from 'react';
import EmailField from './EmailField';
import InputField from './InputField';
import CheckField from './CheckField';

class PeopleForm extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      Firstname: "",
      Lastname: "",
      Description: "",
      Email: "",
      Active: false
    };

    this.clear = this.clear.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
  }

  clear()  {
    this.refs.firstname.clear();
    this.refs.lastname.clear();
    this.refs.description.clear();
    this.refs.email.clear();
    this.refs.active.clear();

  }

  sendRequest(){
    this.setState({
      Firstname: this.refs.firstname.state.value,
      Lastname: this.refs.lastname.state.value,
      Description: this.refs.description.state.value,
      Email: this.refs.email.state.value,
      Active: this.refs.active.state.value
    });
    this.clear();
  }

  render(){
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3>People Form</h3>
        </div>
        <div className="panel-body">
          <InputField type="Firsname" ref="firstname" />
          <InputField type="Lastname" ref="lastname" />
          <InputField type="Description" ref="description" />
          <EmailField ref="email"/>
          <CheckField fieldName="Active" ref="active" />

          <div className = "row pull-right">
            <button className="btn btn-primary" onClick={this.clear}>Clear</button>
            <button className="btn btn-default" onClick={this.sendRequest}>Create</button>
          </div>
        </div>
      </div>
    );
  }
}

export default PeopleForm;
