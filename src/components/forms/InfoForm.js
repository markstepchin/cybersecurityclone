import React from 'react';
import Input from './utilities/Input';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';
import NextButton from '../layout/NextButton';

class InfoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            businessName: '',
            businessType: '',
            projectedRevenue: '',
            numEmployees: '',
            subjectToPCI: false,
            subjectToHIPPA: false,
            hadPreviousInsurance: false,
            previousInsuranceDate: '',
        }
    }

    render() {
        return (
            <form>
                <Input
                    type='text'
                    label='Business Name'
                    placeholder='ABC Company'
                    value={this.state.businessName}
                    onChange={event => this.setState({ businessName: event.target.value })}
                />

                <Input
                    type='text'
                    label='Business Type'
                    placeholder='Search for business type'
                    value={this.state.businessType}
                    onChange={event => this.setState({ businessType: event.target.value })}
                />

                <Input
                    type='number'
                    label='Projected Revenue (Next 12 Months)'
                    placeholder='e.g., $400,000'
                    value={this.state.projectedRevenue}
                    onChange={event => this.setState({ projectedRevenue: event.target.value })}
                />

                <Input
                    type='number'
                    label='Number of Employees'
                    placeholder='e.g., 10'
                    value={this.state.numEmployees}
                    onChange={event => this.setState({ numEmployees: event.target.value })}
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
                    value={this.state.previousInsuranceDate}
                    onChange={event => this.setState({ previousInsuranceDate: event.target.value })}
                />

                <NextButton btnText='Continue' />
            </form >
        )
    }
}

export default InfoForm;