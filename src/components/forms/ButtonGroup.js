import React from 'react';

const ButtonGroup = (props) => (
    <React.Fragment>
        <label>
            {props.label}
        </label>
        <div class="row mb-4">
            <div class="col-6">
                <button type="button" class="btn btn-light btn-block py-3">{props.button1Text}</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-light btn-block py-3">{props.button2Text}</button>
            </div>
        </div>
    </React.Fragment>
)

export default ButtonGroup;