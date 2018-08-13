import React from 'react';
import CheckBoxInput from '../utilities/CheckBoxInput';

/*
Each checkbox is a true or false field
The none field is a variable computed on the fly that displays and toggles the value of other fields


*/

const CheckBoxGroup = (props) => (
    <div className="mb-4">
        <label>
            {props.label}
            {props.options.map(currentOption => (
                <CheckBoxInput
                    text={currentOption}
                    key={currentOption} />
            ))}
            {props.noneOption ? (
                <CheckBoxInput
                    text='None'
                    key='None'
                />) : null}
        </label>
    </div>
)

export default CheckBoxGroup;

/*
const CheckBoxInput = (props) => (
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
        <label class="form-check-label check-label" for="defaultCheck1">
            {props.option}
        </label>
    </div>
)
*/