import React from 'react';

const CheckBoxGroup = (props) => (
    <div class="mb-4">
        <label>
            {props.label}
            {props.label}
            {props.options.map(currentOption => (<CheckBoxInput option={currentOption} />))}
        </label>
    </div>
)

const CheckBoxInput = (props) => (
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label class="form-check-label check-label" for="defaultCheck1">
            {props.option}
        </label>
    </div>
)

export default CheckBoxGroup;