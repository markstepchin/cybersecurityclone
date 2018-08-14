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
                    label='None'
                    checked={noChildChecked(props.children)}
                    onChange={() => uncheckChildren(props.children)}
                />
            ) : null}
        </label>
    </div>
)

const uncheckChildren = (children) => {
    React.Children.map(children, (child) => {
        child.props.unClick();
    })
}

const noChildChecked = (children) => {

    let didntFindChecked = true;

    React.Children.map(children, (child) => {
        if (child.props.checked) {
            didntFindChecked = false;
        }
    })

    return didntFindChecked;
}

export default CheckBoxGroup;