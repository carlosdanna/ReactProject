"use strict";

import React from 'react';
import validator from 'email-validator';

class EmailField extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      value : "",
      valid: true,
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e) {
    if(!validator.validate(e.target.value)){
      this.setState({valid: false, value: e.target.value});
    }else{
      this.setState({valid: true, value: e.target.value})
    }
  }

  clear(){
    this.setState({value: "", valid: true  });
  }

  render(){
    var formClass;
    if (this.state.valid){
      formClass = "form-group"
      return (
        <div className={formClass}>
          <input className='form-control' onChange={this.onInputChange} placeholder="Email" />
        </div>);
    }else{
      formClass = "form-group has-error"

      return (
        <div className={formClass}>
          <input className='form-control' onChange={this.onInputChange} placeholder="Email" />
          <span>Please enter a valid e-mail address</span>
        </div>);
    }
  }
};

export default EmailField
