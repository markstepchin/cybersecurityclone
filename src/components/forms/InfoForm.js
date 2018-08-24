import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from './utilities/Input';
import CheckBoxInput from './utilities/CheckBoxInput';
import { customEvent } from './utilities/customEvent';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';
import NextButton from '../layout/NextButton';

import { updateField } from '../../ducks/fields';

class InfoForm extends React.Component {
  onFieldChange = ({ target: { value, name, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value;
    this.props.dispatch(updateField({ business_info: { [name]: newValue } }));
  };

  render() {
    return (
      <form>
        <Input
          type="text"
          name="business_name"
          label="Business Name"
          placeholder="ABC Company"
          value={this.props.business_info.business_name || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="text"
          name="business_type"
          label="Business Type"
          placeholder="Search for business type"
          value={this.props.business_info.business_type || ''}
          onChange={this.onFieldChange}
        />

        <Input
          type="number"
          name="projected_revenue"
          label="Projected Revenue (Next 12 Months)"
          placeholder="e.g., $400,000"
          value={this.props.business_info.projected_revenue || ''}
          onChange={this.onFieldChange}
        />

        <CheckBoxGroup
          label="Are you subject to:"
          noneOption={true}
          childrenNull={
            // needed to keep the 'None' option de-selected for the initial state
            typeof this.props.business_info.subject_to_PCI === 'undefined' &&
            typeof this.props.business_info.subject_to_PCI === 'undefined'
          }
        >
          <CheckBoxInput
            name="subject_to_PCI"
            label="PCI/DCI Compliance"
            checked={this.props.business_info.subject_to_PCI || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'subject_to_PCI', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="subject_to_HIPPA"
            label="HIPAA/HITECH Compliance"
            checked={this.props.business_info.subject_to_HIPPA || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'subject_to_HIPPA', value: false }))
            }
            onChange={this.onFieldChange}
          />
        </CheckBoxGroup>

        <ButtonGroup
          name="had_previous_insurance"
          label="Have you previously purchased a Cyber Insurance Policy?"
          response={
            typeof this.props.business_info.had_previous_insurance === 'undefined'
              ? null
              : this.props.business_info.had_previous_insurance
          }
          yesClick={() =>
            this.onFieldChange(customEvent({ name: 'had_previous_insurance', value: true }))
          }
          noClick={() =>
            this.onFieldChange(customEvent({ name: 'had_previous_insurance', value: false }))
          }
        />

        {this.props.business_info.had_previous_insurance ? (
          <Input
            type="date"
            name="retroactive_date"
            label="Since when have you had continuous Cyber Insurance coverage (retroactive date)?"
            placeholder="e.g., 10"
            value={this.props.business_info.retroactive_date || ''}
            onChange={this.onFieldChange}
          />
        ) : null}

        <Link to="./operations">
          <NextButton btnText="Continue" />
        </Link>
      </form>
    );
  }
}

const mapStateToProps = ({ fields: { business_info } }) => ({
  business_info
});

export default connect(mapStateToProps)(InfoForm);

/*
const prevValue = this.props.business_info.subject_to_PCI || false;

              const event = {};
              event.target = {};
              event.target.name = 'subject_to_PCI';
              event.target.value = !prevValue;

              this.onFieldChange(event);
*/
