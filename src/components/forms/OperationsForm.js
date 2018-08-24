import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ButtonGroup from './utilities/ButtonGroup';
import { customEvent } from './utilities/customEvent';
import NextButton from '../layout/NextButton';
import { updateField } from '../../ducks/fields';

class OperationsForm extends React.Component {
  onFieldChange = ({ target: { value, name, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value;
    this.props.dispatch(updateField({ business_info: { [name]: newValue } }));
  };

  render() {
    return (
      <React.Fragment>
        <ButtonGroup
          label="Do you have an in-house IT person that implements and manages a computer security program for the company network?"
          response={
            typeof this.props.business_info.have_IT === 'undefined'
              ? null
              : this.props.business_info.have_IT
          }
          yesClick={() => this.onFieldChange(customEvent({ name: 'have_IT', value: true }))}
          noClick={() => this.onFieldChange(customEvent({ name: 'have_IT', value: false }))}
        />

        <ButtonGroup
          label="Do you require each computer used in your business to be password protected?"
          response={
            typeof this.props.business_info.password_protected_computers === 'undefined'
              ? null
              : this.props.business_info.password_protected_computers
          }
          yesClick={() =>
            this.onFieldChange(customEvent({ name: 'password_protected_computers', value: true }))
          }
          noClick={() =>
            this.onFieldChange(customEvent({ name: 'password_protected_computers', value: false }))
          }
        />

        <ButtonGroup
          label="Do you require the passwords to be at least 6 characters in length and changed regularly?"
          response={
            typeof this.props.business_info.passwords_changed_regularly === 'undefined'
              ? null
              : this.props.business_info.passwords_changed_regularly
          }
          yesClick={() =>
            this.onFieldChange(customEvent({ name: 'passwords_changed_regularly', value: true }))
          }
          noClick={() =>
            this.onFieldChange(customEvent({ name: 'passwords_changed_regularly', value: false }))
          }
        />

        <ButtonGroup
          label="Do you have antivirus in place? (updated at least monthly)"
          response={
            typeof this.props.business_info.have_antivirus === 'undefined'
              ? null
              : this.props.business_info.have_antivirus
          }
          yesClick={() => this.onFieldChange(customEvent({ name: 'have_antivirus', value: true }))}
          noClick={() => this.onFieldChange(customEvent({ name: 'have_antivirus', value: false }))}
        />

        <ButtonGroup
          label="Some insurance carriers will only insure businesses with an active antivirus. Would you like to purchase discounted antivirus
                    along with your policy?"
          response={
            typeof this.props.business_info.interested_in_antivirus === 'undefined'
              ? null
              : this.props.business_info.interested_in_antivirus
          }
          yesClick={() =>
            this.onFieldChange(customEvent({ name: 'interested_in_antivirus', value: true }))
          }
          noClick={() =>
            this.onFieldChange(customEvent({ name: 'interested_in_antivirus', value: false }))
          }
        />

        <ButtonGroup
          label="Do you have firewalls in place? (updated at least monthly)"
          response={
            typeof this.props.business_info.have_firewalls === 'undefined'
              ? null
              : this.props.business_info.have_firewalls
          }
          yesClick={() => this.onFieldChange(customEvent({ name: 'have_firewalls', value: true }))}
          noClick={() => this.onFieldChange(customEvent({ name: 'have_firewalls', value: false }))}
        />

        <ButtonGroup
          label="Do you have a 3rd party perform vulnerability scans or penetration testing done on your computer network at least once a
                    year?"
          response={
            typeof this.props.business_info.security_scans === 'undefined'
              ? null
              : this.props.business_info.security_scans
          }
          yesClick={() => this.onFieldChange(customEvent({ name: 'security_scans', value: true }))}
          noClick={() => this.onFieldChange(customEvent({ name: 'security_scans', value: false }))}
        />

        <ButtonGroup
          label="Do you have revenue generating permanent physical locations outside the US?"
          response={
            typeof this.props.business_info.international === 'undefined'
              ? null
              : this.props.business_info.international
          }
          yesClick={() => this.onFieldChange(customEvent({ name: 'international', value: true }))}
          noClick={() => this.onFieldChange(customEvent({ name: 'international', value: false }))}
        />

        <ButtonGroup
          label="Do you use social media to promote or market your business?"
          response={
            typeof this.props.business_info.use_social_media === 'undefined'
              ? null
              : this.props.business_info.use_social_media
          }
          yesClick={() =>
            this.onFieldChange(customEvent({ name: 'use_social_media', value: true }))
          }
          noClick={() =>
            this.onFieldChange(customEvent({ name: 'use_social_media', value: false }))
          }
        />

        <ButtonGroup
          label="Do you block or restrict your employees from accessing their personal accounts on social media sites?"
          response={
            typeof this.props.business_info.restrict_social_media === 'undefined'
              ? null
              : this.props.business_info.restrict_social_media
          }
          yesClick={() =>
            this.onFieldChange(customEvent({ name: 'restrict_social_media', value: true }))
          }
          noClick={() =>
            this.onFieldChange(customEvent({ name: 'restrict_social_media', value: false }))
          }
        />

        <Link to="./data">
          <NextButton btnText="Next" />
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ fields: { business_info } }) => ({
  business_info
});

export default connect(mapStateToProps)(OperationsForm);
