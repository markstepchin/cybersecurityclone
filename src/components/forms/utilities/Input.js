import React from 'react';

const Input = (props) => (
    <div class="form-group  mb-4">
        <label>{props.label}</label>
        <input
            class="form-control"
            placeholder={props.placeholder}
            type={props.type}
            value={props.value}
            onChange={props.onChange} />
    </div>
)

export default Input;