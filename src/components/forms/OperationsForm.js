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
            passwordsChangedRegularly: null,
            haveAntivirus: null,
            interestedInAntivirus: null,
            haveFirewalls: null,
            securityScans: null,
            international: null,
            useSocialMedia: null,
            restrictSocialMedia: null,
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

                <ButtonGroup
                    label='Do you require the passwords to be at least 6 characters in length and changed regularly?'
                    response={this.state.passwordsChangedRegularly}
                    yesClick={() => this.setState({ passwordsChangedRegularly: true })}
                    noClick={() => this.setState({ passwordsChangedRegularly: false })}
                />

                <ButtonGroup
                    label='Do you have antivirus in place? (updated at least monthly)'
                    response={this.state.haveAntivirus}
                    yesClick={() => this.setState({ haveAntivirus: true })}
                    noClick={() => this.setState({ haveAntivirus: false })}
                />

                <ButtonGroup
                    label='Some insurance carriers will only insure businesses with an active antivirus. Would you like to purchase discounted antivirus
                    along with your policy?'
                    response={this.state.interestedInAntivirus}
                    yesClick={() => this.setState({ interestedInAntivirus: true })}
                    noClick={() => this.setState({ interestedInAntivirus: false })}
                />

                <ButtonGroup
                    label='Do you have firewalls in place? (updated at least monthly)'
                    response={this.state.haveFirewalls}
                    yesClick={() => this.setState({ haveFirewalls: true })}
                    noClick={() => this.setState({ haveFirewalls: false })}
                />

                <ButtonGroup
                    label='Do you have a 3rd party perform vulnerability scans or penetration testing done on your computer network at least once a
                    year?'
                    response={this.state.securityScans}
                    yesClick={() => this.setState({ securityScans: true })}
                    noClick={() => this.setState({ securityScans: false })}
                />

                <ButtonGroup
                    label='Do you have revenue generating permanent physical locations outside the US?'
                    response={this.state.international}
                    yesClick={() => this.setState({ international: true })}
                    noClick={() => this.setState({ international: false })}
                />

                <ButtonGroup
                    label='Do you use social media to promote or market your business?'
                    response={this.state.useSocialMedia}
                    yesClick={() => this.setState({ useSocialMedia: true })}
                    noClick={() => this.setState({ useSocialMedia: false })}
                />

                <ButtonGroup
                    label='Do you block or restrict your employees from accessing their personal accounts on social media sites?'
                    response={this.state.restrictSocialMedia}
                    yesClick={() => this.setState({ restrictSocialMedia: true })}
                    noClick={() => this.setState({ restrictSocialMedia: false })}
                />

                <NextButton  btnText='Next'/>
                
            </React.Fragment>
        )
    }
}
export default OperationsForm;