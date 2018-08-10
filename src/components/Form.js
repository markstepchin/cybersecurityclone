import React from 'react';
import Input from './Input';
import CheckBoxGroup from './CheckBoxGroup';
import ButtonGroup from './ButtonGroup';
import NextButton from './NextButton';

import CheckBoxGroup1 from './CheckBoxGroup1';

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
            options={['PCI/DCI Compliance', 'HIPAA/HITECH Compliance', 'None']}
        />

        <ButtonGroup
            label='Have you previously purchased a Cyber Insurance Policy?'
            button1Text='Yes'
            button2Text='No'
        />

        <Input
            type='date'
            label='Since when have you had continuous Cyber Insurance coverage (retroactive date)?'
            placeholder='e.g., 10'
        />

        <NextButton btnText='Continue' />
    </form >
)

export default Form;