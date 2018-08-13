import React from 'react';
import CheckBoxInput from '../utilities/CheckBoxInput';

/*
The none field is a variable computed on the fly that displays and toggles the value of other fields
*/

const CheckBoxGroup = (props) => (
    <div className="mb-4">
        <label>
            {props.label}
            {props.children}
            {props.noneOption ? (
                <CheckBoxInput
                    label='None' />
            ) : null}
        </label>
    </div>
)

const anyChildChecked = (children) => {
    return true;
}

export default CheckBoxGroup;