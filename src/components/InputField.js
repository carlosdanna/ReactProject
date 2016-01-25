"use strict"
import React from 'react';

class InputField extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      value: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.setState({value: e.target.value});
  }

  clear(){
    this.setState({value: ""});
  }

  render(){
    return (
      <div className="form-group">
        <input className="form-control" placeholder={this.props.type} onChange={this.onChange} value={this.state.value} />
      </div>
    );
  }
}

export default InputField;
