"use strict";

import React from 'react';
import EmailField from './EmailField.jsx';
import InputField from './InputField.jsx';


class PeopleForm extends React.Component {
  constructor(props){
    super(props);

  }


  render(){
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3>People Form</h3>
        </div>
        <div className="panel-body">
          <InputField type="Firsname" ref="fieldname" />
          <InputField type="Lastname" ref="lastname" />
          <InputField type="Description" ref="description" />
          <EmailField />
        </div>
      </div>
    );
  }
}

export default PeopleForm;
