import React from 'react';

const Input = (props) => (
    <div class="form-group  mb-4">
        <label for={props.label}>{props.label}</label>
        <input type={props.type} class="form-control" id={props.label} placeholder={props.placeholder} />
    </div>
)

export default Input;