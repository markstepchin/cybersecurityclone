import React from 'react';
import Input from './Input';
import CheckBox from './CheckBox';

const Form = () => (
    <form>
        <Input
            type='text'
            label='Business Name'
            placeholder='ABC Company'
        />

        <div class="form-group  mb-4">
            <label for="businessType">Business Type</label>
            <input type="text" class="form-control" id="businessType" placeholder="Search for business type" />
        </div>

        <div class="form-group  mb-4">
            <label for="projectedRevenue">Projected Revenue (Next 12 Months)</label>
            <input type="number" class="form-control" id="projectedRevenue" placeholder="e.g., $400,000" />
        </div>

        <div class="form-group  mb-4">
            <label for="numberEmployees">Number of Employees</label>
            <input type="number" class="form-control" id="numberEmployees" placeholder='e.g., 10' />
        </div>



        <CheckBox
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

        <div class="form-group mb-4">
            <label for="lengthInsured">Since when have you had continuous Cyber Insurance coverage (retroactive date)?</label>
            <input type="date" class="form-control" id="lengthInsured" placeholder='e.g., 10' />
        </div>

        <div class="my-5">
            <button type="button" class="continue-btn">
                Continue
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </form >
)

export default Form;