import React from 'react';
import Input from './Input';
import CheckBoxGroup from './CheckBoxGroup';

const Form = () => (
    <form>
        <Input
            type='text'
            label='Business Name'
            placeholder='ABC Company'
        />

        <Input
            type='text'
            label='Business Type'
            placeholder='Search for business type'
        />

        <Input
            type='number'
            label='Projected Revenue (Next 12 Months)'
            placeholder='e.g., $400,000'
        />

        <Input
            type='number'
            label='Number of Employees'
            placeholder='e.g., 10'
        />


        <CheckBoxGroup
            label='Are you subject to:'
            option1='PCI/DCI Compliance'
            option2='HIPAA/HITECH Compliance'
            option3='None'
        />

        <label>
            Have you previously purchased a Cyber Insurance Policy?
        </label>
        <div class="row mb-4">
            <div class="col-6">
                <button type="button" class="btn btn-light btn-block py-3">Yes</button>
            </div>
            <div class="col-6">
                <button type="button" class="btn btn-light btn-block py-3">No</button>
            </div>
        </div>

        <Input
            type='date'
            label='Since when have you had continuous Cyber Insurance coverage (retroactive date)?'
            placeholder='e.g., 10'
        />

        <div class="my-5">
            <button type="button" class="continue-btn">
                Continue
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </form >
)

export default Form;