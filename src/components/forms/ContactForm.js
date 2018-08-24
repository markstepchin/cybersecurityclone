import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from './utilities/Input';
import SelectState from './utilities/SelectState';
import NextButton from '../layout/NextButton';

import { updateField } from '../../ducks/fields';

class ContactForm extends React.Component {
  constructor() {
    super();
    this.state = {
      state: ''
    };
  }

  onFieldChange = ({ target: { value, name } }) => {
    this.props.dispatch(updateField({ contact_info: { [name]: value } }));
  };

  render() {
    return (
      <React.Fragment>
        <Input
          type="text"
          name="contact_name"
          label="Contact Name"
          placeholder="Jane Smith"
          value={this.props.contact_info.contact_name || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="number"
          name="contact_phone"
          label="Phone"
          placeholder="(888) 888-8888"
          value={this.props.contact_info.contact_phone || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="email"
          name="contact_email"
          label="Email"
          placeholder="jamesmith@abccompany.com"
          value={this.props.contact_info.contact_email || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="text"
          name="contact_address"
          label="Street Address"
          placeholder="123 Main Street"
          value={this.props.contact_info.contact_address || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="text"
          name="contact_suite_floor"
          label="Suite/Floor"
          placeholder="Suite 1100"
          value={this.props.contact_info.contact_suite_floor || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="text"
          name="contact_city"
          label="City"
          placeholder="San Francisco"
          value={this.props.contact_info.contact_city || ''}
          onChange={this.onFieldChange}
        />

        <SelectState
          name="contact_state"
          state={this.props.contact_info.contact_state || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="number"
          name="contact_zip"
          label="Zip Code"
          placeholder="12345"
          value={this.props.contact_info.contact_zip || ''}
          onChange={this.onFieldChange}
        />

        <Link to="./quotes">
          <NextButton btnText="See your matches" />
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ fields: { contact_info } }) => ({
  contact_info
});

export default connect(mapStateToProps)(ContactForm);
