import React from 'react';

const CheckBoxInput = (props) => (
    <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label check-label">
            {props.text}
        </label>
    </div>
)

export default CheckBoxInput;