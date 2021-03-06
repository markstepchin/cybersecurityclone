import React from 'react';

const CheckBoxInput = props => (
  <div className="form-check">
    <input
      className="form-check-input"
      type="checkbox"
      name={props.name}
      checked={props.checked}
      onChange={props.onChange}
    />
    <label className="form-check-label check-label">{props.label}</label>
  </div>
);

export default CheckBoxInput;
