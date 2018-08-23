import React from 'react';
import { connect } from 'react-redux';
import Input from './utilities/Input';
import CheckBoxInput from './utilities/CheckBoxInput';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';

import { updateField } from '../../ducks/fields';

class InfoForm extends React.Component {
  state = {
    businessName: '',
    businessType: '',
    projectedRevenue: '',
    numEmployees: '',
    subjectToPCI: null,
    subjectToHIPPA: null,
    hadPreviousInsurance: null,
    previousInsuranceDate: ''
  };

  onFieldChange = ({ target: { value, name } }) => {
    this.props.dispatch(updateField({ business_info: { [name]: value } }));
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

        <Input
          type="number"
          name="number_employees"
          label="Number of Employees"
          placeholder="e.g., 10"
          value={this.props.business_info.number_employees || ''}
          onChange={this.onFieldChange}
        />

        <CheckBoxGroup label="Are you subject to:" noneOption={true}>
          <CheckBoxInput
            label="PCI/DCI Compliance"
            checked={false}
            unClick={() => this.setState({ subjectToPCI: false })}
            onChange={() =>
              this.setState(prevState => ({
                subjectToPCI: !prevState.subjectToPCI
              }))
            }
          />
          <CheckBoxInput
            label="HIPAA/HITECH Compliance"
            checked={this.state.subjectToHIPPA}
            unClick={() => this.setState({ subjectToHIPPA: false })}
            onChange={() =>
              this.setState(prevState => ({
                subjectToHIPPA: !prevState.subjectToHIPPA
              }))
            }
          />
        </CheckBoxGroup>

        <ButtonGroup
          label="Have you previously purchased a Cyber Insurance Policy?"
          response={this.props.business_info.had_previous_insurance || false}
          yesClick={() => {
            const event = {};
            event.target = {};
            event.target.name = 'had_previous_insurance';
            event.target.value = true;
            this.onFieldChange(event);
          }}
          noClick={() => {
            const event = {};
            event.target = {};
            event.target.name = 'had_previous_insurance';
            event.target.value = false;
            this.onFieldChange(event);
          }}
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
      </form>
    );
  }
}

const mapStateToProps = ({ fields: { business_info } }) => ({
  business_info
});

export default connect(mapStateToProps)(InfoForm);
