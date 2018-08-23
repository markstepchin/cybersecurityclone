import React from 'react';

const Input = props => (
  <div className="form-group  mb-4">
    <label>{props.label}</label>
    <input
      className="form-control"
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    />
    <div className="valid-feedback">Please choose a username.</div>
  </div>
);

export default Input;
