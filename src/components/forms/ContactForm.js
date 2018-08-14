import React from 'react';
import Input from './utilities/Input';
import CheckBoxInput from './utilities/CheckBoxInput';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';
import SelectState from './utilities/SelectState';
import NextButton from '../layout/NextButton';

class ContactForm extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: '',
            suiteFloor: '',
            city: '',
            state: '',
            zip: '',
        }
    }

    render() {
        return (
            <React.Fragment>

                <Input
                    type='text'
                    label='Contact Name'
                    placeholder='Jane Smith'
                    value={this.state.name}
                    onChange={event => this.setState({ name: event.target.value })}
                />

                <Input
                    type='number'
                    label='Phone'
                    placeholder='(888) 888-8888'
                    value={this.state.phone}
                    onChange={event => this.setState({ phone: event.target.value })}
                />

                <Input
                    type='email'
                    label='Email'
                    placeholder='jamesmith@abccompany.com'
                    value={this.state.email}
                    onChange={event => this.setState({ email: event.target.value })}
                />

                <Input
                    type='text'
                    label='Street Address'
                    placeholder='123 Main Street'
                    value={this.state.address}
                    onChange={event => this.setState({ address: event.target.value })}
                />

                <Input
                    type='text'
                    label='Suite/Floor'
                    placeholder='Suite 1100'
                    value={this.state.suiteFloor}
                    onChange={event => this.setState({ suiteFloor: event.target.value })}
                />

                <Input
                    type='text'
                    label='City'
                    placeholder='San Francisco'
                    value={this.state.city}
                    onChange={event => this.setState({ city: event.target.value })}
                />

                <SelectState
                    state='null'
                    onChange={event => this.setState({ state: event.target.value })}
                />

                <Input
                    type='number'
                    label='Zip Code'
                    placeholder='12345'
                    value={this.state.zip}
                    onChange={event => this.setState({ zip: event.target.value })}
                />

            </React.Fragment>
        )
    }
}

export default ContactForm;