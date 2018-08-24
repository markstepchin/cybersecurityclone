import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CheckBoxInput from './utilities/CheckBoxInput';
import { customEvent } from './utilities/customEvent';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';
import NextButton from '../layout/NextButton';

import { updateField } from '../../ducks/fields';

class DataForm extends React.Component {
  onFieldChange = ({ target: { value, name, checked, type } }) => {
    const newValue = type === 'checkbox' ? checked : value;
    this.props.dispatch(updateField({ business_info: { [name]: newValue } }));
  };

  render() {
    return (
      <React.Fragment>
        <CheckBoxGroup
          label="Do you encrypt sensitive data on:"
          noneOption={true}
          childrenNull={
            typeof this.props.business_info.encrypt_on_computers === 'undefined' &&
            typeof this.props.business_info.encrypt_on_mobile === 'undefined' &&
            typeof this.props.business_info.encrypt_on_networks === 'undefined'
          }
        >
          <CheckBoxInput
            name="encrypt_on_computers"
            label="Office Computers"
            checked={this.props.business_info.encrypt_on_computers || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'encrypt_on_computers', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="encrypt_on_mobile"
            label="Mobile Devices (laptops, cell phones, flash drives, tablets, etc.)"
            checked={this.props.business_info.encrypt_on_mobile || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'encrypt_on_mobile', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="encrypt_on_networks"
            label="Networks"
            checked={this.props.business_info.encrypt_on_networks || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'encrypt_on_networks', value: false }))
            }
            onChange={this.onFieldChange}
          />
        </CheckBoxGroup>

        <ButtonGroup
          label="Do you backup critical business systems, data, and Personally Identifiable Information (PII) at least once a week?"
          response={
            typeof this.props.business_info.backup_data === 'undefined'
              ? null
              : this.props.business_info.backup_data
          }
          yesClick={() => this.onFieldChange(customEvent({ name: 'backup_data', value: true }))}
          noClick={() => this.onFieldChange(customEvent({ name: 'backup_data', value: false }))}
        />

        <CheckBoxGroup label="Where do you back it up? (select all that apply)" noneOption={false}>
          <CheckBoxInput
            name="backup_on_site"
            label="On-site"
            checked={this.props.business_info.backup_on_site || false}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="backup_on_offsite"
            label="Offsite (physical storage)"
            checked={this.props.business_info.backup_on_offsite || false}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="backup_on_cloud"
            label="Offsite (the Cloud)"
            checked={this.props.business_info.backup_on_cloud || false}
            onChange={this.onFieldChange}
          />
        </CheckBoxGroup>

        <CheckBoxGroup
          label="Within the last 5 years, have you experienced or have reason to suspect any of the following (or something similar to them):"
          noneOption={true}
          childrenNull={
            typeof this.props.business_info.system_intrustion === 'undefined' &&
            typeof this.props.business_info.tampering === 'undefined' &&
            typeof this.props.business_info.code_attacks === 'undefined' &&
            typeof this.props.business_info.loss_of_data === 'undefined' &&
            typeof this.props.business_info.loss_of_media === 'undefined' &&
            typeof this.props.business_info.hacking_incident === 'undefined' &&
            typeof this.props.business_info.extortion_attempt === 'undefined' &&
            typeof this.props.business_info.data_theft === 'undefined' &&
            typeof this.props.business_info.copyright_dispute === 'undefined'
          }
        >
          <CheckBoxInput
            name="system_intrustion"
            label="System intrusions"
            checked={this.props.business_info.system_intrustion || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'system_intrustion', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="tampering"
            label="Tampering"
            checked={this.props.business_info.tampering || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'tampering', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="code_attacks"
            label="Virus or malicious code attacks"
            checked={this.props.business_info.code_attacks || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'code_attacks', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="loss_of_data"
            label="Loss of Data"
            checked={this.props.business_info.loss_of_data || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'loss_of_data', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="loss_of_media"
            label="Loss of portable media"
            checked={this.props.business_info.loss_of_media || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'loss_of_media', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="hacking_incident"
            label="Hacking incident"
            checked={this.props.business_info.hacking_incident || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'hacking_incident', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="extortion_attempt"
            label="Extortion attempt"
            checked={this.props.business_info.extortion_attempt || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'extortion_attempt', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="data_theft"
            label="Data theft"
            checked={this.props.business_info.data_theft || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'data_theft', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="copyright_dispute"
            label="Copyright or trademark dispute"
            checked={this.props.business_info.copyright_dispute || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'copyright_dispute', value: false }))
            }
            onChange={this.onFieldChange}
          />
        </CheckBoxGroup>

        <CheckBoxGroup
          label="Did the incident(s) described above result in any of the following (or would they have if you had cyber insurance at the
                        time)?:"
          noneOption={true}
          childrenNull={
            typeof this.props.business_info.data_loss === 'undefined' &&
            typeof this.props.business_info.income_loss === 'undefined' &&
            typeof this.props.business_info.legal_threat === 'undefined' &&
            typeof this.props.business_info.actual_insurance_claim === 'undefined' &&
            typeof this.props.business_info.suspected_insurance_claim === 'undefined'
          }
        >
          <CheckBoxInput
            name="data_loss"
            label="Loss of sensitive data"
            checked={this.props.business_info.data_loss || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'data_loss', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="income_loss"
            label="Loss of revenue or income"
            checked={this.props.business_info.income_loss || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'income_loss', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="legal_threat"
            label="Threatened or actual legal action"
            checked={this.props.business_info.legal_threat || false}
            unClick={() => this.onFieldChange(customEvent({ name: 'legal_threat', value: false }))}
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="actual_insurance_claim"
            label="Actual insurance claim"
            checked={this.props.business_info.actual_insurance_claim || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'actual_insurance_claim', value: false }))
            }
            onChange={this.onFieldChange}
          />
          <CheckBoxInput
            name="suspected_insurance_claim"
            label="Suspected insurance claim"
            checked={this.props.business_info.suspected_insurance_claim || false}
            unClick={() =>
              this.onFieldChange(customEvent({ name: 'suspected_insurance_claim', value: false }))
            }
            onChange={this.onFieldChange}
          />
        </CheckBoxGroup>

        <Link to="./contact">
          <NextButton btnText="Last Step" />
        </Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ fields: { business_info } }) => ({
  business_info
});

export default connect(mapStateToProps)(DataForm);
