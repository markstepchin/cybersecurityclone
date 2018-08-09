import React from 'react';

const CheckBox = (props) => (
    <div class="mb-4">
        <label>
            {props.label}
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label check-label" for="defaultCheck1">
                    {props.option1}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label check-label" for="defaultCheck1">
                    {props.option2}
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                <label class="form-check-label check-label" for="defaultCheck1">
                    {props.option3}
                </label>
            </div>
        </label>
    </div>
)

export default CheckBox;