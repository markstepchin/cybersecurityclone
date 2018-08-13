import React from 'react';

const CheckBoxInput = (props) => (
    <div className="form-check">
        <input
            className="form-check-input"
            type="checkbox"
            checked={props.checked}
            onChange={props.onCheck} />
        <label className="form-check-label check-label">
            {props.label}
        </label>
    </div>
)

export default CheckBoxInput;