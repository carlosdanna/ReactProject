"use strict";

import React from 'react';

class CheckField extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: false
    };

    //binds
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({
      value: e.target.checked
    });
  }

  clear(){
    this.setState({
      value: false
    });
  }

  render(){
    return (
      <div className="form-group">
        <label>{this.props.fieldName} </label>
        <input clasName="col-sm-3" type='checkbox' onChange={this.onChange} checked={this.state.value} />
      </div>
      );
  }
}

export default CheckField;
