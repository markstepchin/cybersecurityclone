import React from 'react';
import Input from './utilities/Input';
import CheckBoxInput from './utilities/CheckBoxInput';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';
import NextButton from '../layout/NextButton';

class OperationsForm extends React.Component {

    constructor() {
        super();

        this.state = {
            IT: null,
            passwordProtectedComputers: null,
        }
    }

    render() {
        return (
            <React.Fragment>

                <ButtonGroup
                    label='Do you have an in-house IT person that implements and manages a computer security program for the company network?'
                    response={this.state.IT}
                    yesClick={() => this.setState({ IT: true })}
                    noClick={() => this.setState({ IT: false })}
                />

                <ButtonGroup
                    label='Do you require each computer used in your business to be password protected?'
                    response={this.state.passwordProtectedComputers}
                    yesClick={() => this.setState({ passwordProtectedComputers: true })}
                    noClick={() => this.setState({ passwordProtectedComputers: false })}
                />

                <label>
                    Do you require each computer used in your business to be password protected?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you require the passwords to be at least 6 characters in length and changed regularly?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you have antivirus in place? (updated at least monthly)
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Some insurance carriers will only insure businesses with an active antivirus. Would you like to purchase discounted antivirus
                    along with your policy?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you have firewalls in place? (updated at least monthly)
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you have a 3rd party perform vulnerability scans or penetration testing done on your computer network at least once a
                    year?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you have revenue generating permanent physical locations outside the US?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you use social media to promote or market your business?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <label>
                    Do you block or restrict your employees from accessing their personal accounts on social media sites?
                </label>
                <div class="row mb-4">
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">Yes</button>
                    </div>
                    <div class="col-6">
                        <button type="button" class="btn btn-light btn-block py-3">No</button>
                    </div>
                </div>

                <div class="my-5">
                    <button type="button" class="continue-btn">
                        Next
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </React.Fragment>
        )
    }
}
export default OperationsForm;