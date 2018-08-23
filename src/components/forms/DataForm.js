import React from 'react';
import { Link } from 'react-router-dom';
import CheckBoxInput from './utilities/CheckBoxInput';
import CheckBoxGroup from './utilities/CheckBoxGroup';
import ButtonGroup from './utilities/ButtonGroup';
import NextButton from '../layout/NextButton';

class DataForm extends React.Component {
  constructor() {
    super();
    this.state = {
      encryptOnComputers: null,
      encryptOnMobile: null,
      encryptOnNetworks: null,
      backupData: null,
      backupOnSite: false,
      backupOffSitePhysical: false,
      backupOffSiteCloud: false,
      systemIntrustion: false,
      tampering: false,
      codeAttacks: false,
      lossOfData: false,
      lossOfMedia: false,
      hackingIncident: false,
      extortionAttempt: false,
      dataTheft: false,
      copyrightDispute: false,
      dataLoss: false,
      incomeLoss: false,
      legalThreat: false,
      actualInsuranceClaim: false,
      suspectedInsuranceClaim: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <CheckBoxGroup label="Do you encrypt sensitive data on:" noneOption={true}>
          <CheckBoxInput
            label="Office Computers"
            checked={this.state.encryptOnComputers}
            onChange={() =>
              this.setState(prevState => ({
                encryptOnComputers: !prevState.encryptOnComputers
              }))
            }
          />
          <CheckBoxInput
            label="Mobile Devices (laptops, cell phones, flash drives, tablets, etc.)"
            checked={this.state.encryptOnMobile}
            onChange={() =>
              this.setState(prevState => ({
                encryptOnMobile: !prevState.encryptOnMobile
              }))
            }
          />
          <CheckBoxInput
            label="Networks"
            checked={this.state.encryptOnNetworks}
            onChange={() =>
              this.setState(prevState => ({
                encryptOnNetworks: !prevState.encryptOnNetworks
              }))
            }
          />
        </CheckBoxGroup>

        <ButtonGroup
          label="Do you backup critical business systems, data, and Personally Identifiable Information (PII) at least once a week?"
          response={this.state.backupData}
          yesClick={() => this.setState({ backupData: true })}
          noClick={() => this.setState({ backupData: false })}
        />

        <CheckBoxGroup label="Where do you back it up? (select all that apply)" noneOption={false}>
          <CheckBoxInput
            label="On-site"
            checked={this.state.backupOnSite}
            onChange={() =>
              this.setState(prevState => ({
                backupOnSite: !prevState.backupOnSite
              }))
            }
          />
          <CheckBoxInput
            label="Offsite (physical storage)"
            checked={this.state.backupOffSitePhysical}
            onChange={() =>
              this.setState(prevState => ({
                backupOffSitePhysical: !prevState.backupOffSitePhysical
              }))
            }
          />
          <CheckBoxInput
            label="Offsite (the Cloud)"
            checked={this.state.backupOffSiteCloud}
            onChange={() =>
              this.setState(prevState => ({
                backupOffSiteCloud: !prevState.backupOffSiteCloud
              }))
            }
          />
        </CheckBoxGroup>

        <CheckBoxGroup
          label="Within the last 5 years, have you experienced or have reason to suspect any of the following (or something similar to them):"
          noneOption={true}
        >
          <CheckBoxInput
            label="System intrusions"
            checked={this.state.systemIntrustion}
            onChange={() =>
              this.setState(prevState => ({
                systemIntrustion: !prevState.systemIntrustion
              }))
            }
          />
          <CheckBoxInput
            label="Tampering"
            checked={this.state.tampering}
            onChange={() => this.setState(prevState => ({ tampering: !prevState.tampering }))}
          />
          <CheckBoxInput
            label="Virus or malicious code attacks"
            checked={this.state.codeAttacks}
            onChange={() =>
              this.setState(prevState => ({
                codeAttacks: !prevState.codeAttacks
              }))
            }
          />
          <CheckBoxInput
            label="Loss of Data"
            checked={this.state.lossOfData}
            onChange={() =>
              this.setState(prevState => ({
                lossOfData: !prevState.lossOfData
              }))
            }
          />
          <CheckBoxInput
            label="Loss of portable media"
            checked={this.state.lossOfMedia}
            onChange={() =>
              this.setState(prevState => ({
                lossOfMedia: !prevState.lossOfMedia
              }))
            }
          />
          <CheckBoxInput
            label="Hacking incident"
            checked={this.state.hackingIncident}
            onChange={() =>
              this.setState(prevState => ({
                hackingIncident: !prevState.hackingIncident
              }))
            }
          />
          <CheckBoxInput
            label="Extortion attempt"
            checked={this.state.extortionAttempt}
            onChange={() =>
              this.setState(prevState => ({
                extortionAttempt: !prevState.extortionAttempt
              }))
            }
          />
          <CheckBoxInput
            label="Data theft"
            checked={this.state.dataTheft}
            onChange={() => this.setState(prevState => ({ dataTheft: !prevState.dataTheft }))}
          />
          <CheckBoxInput
            label="Copyright or trademark dispute"
            checked={this.state.copyrightDispute}
            onChange={() =>
              this.setState(prevState => ({
                copyrightDispute: !prevState.copyrightDispute
              }))
            }
          />
        </CheckBoxGroup>

        <CheckBoxGroup
          label="Did the incident(s) described above result in any of the following (or would they have if you had cyber insurance at the
                        time)?:"
          noneOption={true}
        >
          <CheckBoxInput
            label="Loss of sensitive data"
            checked={this.state.dataLoss}
            onChange={() => this.setState(prevState => ({ dataLoss: !prevState.dataLoss }))}
          />
          <CheckBoxInput
            label="Loss of revenue or income"
            checked={this.state.incomeLoss}
            onChange={() =>
              this.setState(prevState => ({
                incomeLoss: !prevState.incomeLoss
              }))
            }
          />
          <CheckBoxInput
            label="Threatened or actual legal action"
            checked={this.state.legalThreat}
            onChange={() =>
              this.setState(prevState => ({
                legalThreat: !prevState.legalThreat
              }))
            }
          />
          <CheckBoxInput
            label="Actual insurance claim"
            checked={this.state.actualInsuranceClaim}
            onChange={() =>
              this.setState(prevState => ({
                actualInsuranceClaim: !prevState.actualInsuranceClaim
              }))
            }
          />
          <CheckBoxInput
            label="Suspected insurance claim"
            checked={this.state.suspectedInsuranceClaim}
            onChange={() =>
              this.setState(prevState => ({
                suspectedInsuranceClaim: !prevState.suspectedInsuranceClaim
              }))
            }
          />
        </CheckBoxGroup>

        <Link to="./contact">
          <NextButton btnText="Last Step" />
        </Link>
      </React.Fragment>
    );
  }
}

export default DataForm;
