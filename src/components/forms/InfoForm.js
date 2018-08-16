import React from "react";
import { connect } from "react-redux";
import Input from "./utilities/Input";
import CheckBoxInput from "./utilities/CheckBoxInput";
import CheckBoxGroup from "./utilities/CheckBoxGroup";
import ButtonGroup from "./utilities/ButtonGroup";

class InfoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      businessName: "",
      businessType: "",
      projectedRevenue: "",
      numEmployees: "",
      subjectToPCI: false,
      subjectToHIPPA: false,
      hadPreviousInsurance: false,
      previousInsuranceDate: ""
    };
  }

  render() {
    return (
      <form>
        <Input
          type="text"
          label="Business Name"
          placeholder="ABC Company"
          value={this.props.formData[0].data}
          onChange={event =>
            this.props.dispatch({
              type: "FIELD_CHANGE",
              payLoad: {
                index: 0,
                data: event.target.value
              }
            })
          }
        />

        <Input
          type="text"
          label="Business Type"
          placeholder="Search for business type"
          value={this.state.businessType}
          onChange={event =>
            this.setState({ businessType: event.target.value })
          }
        />

        <Input
          type="number"
          label="Projected Revenue (Next 12 Months)"
          placeholder="e.g., $400,000"
          value={this.state.projectedRevenue}
          onChange={event =>
            this.setState({ projectedRevenue: event.target.value })
          }
        />

        <Input
          type="number"
          label="Number of Employees"
          placeholder="e.g., 10"
          value={this.state.numEmployees}
          onChange={event =>
            this.setState({ numEmployees: event.target.value })
          }
        />

        <CheckBoxGroup label="Are you subject to:" noneOption={true}>
          <CheckBoxInput
            label="PCI/DCI Compliance"
            checked={this.state.subjectToPCI}
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
          response={this.state.hadPreviousInsurance}
          toggle={() =>
            this.setState(prevState => ({
              hadPreviousInsurance: !prevState.hadPreviousInsurance
            }))
          }
        />

        <Input
          type="date"
          label="Since when have you had continuous Cyber Insurance coverage (retroactive date)?"
          placeholder="e.g., 10"
          value={this.state.previousInsuranceDate}
          onChange={event =>
            this.setState({ previousInsuranceDate: event.target.value })
          }
        />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    formData: state.formData
  };
};

export default connect(mapStateToProps)(InfoForm);
