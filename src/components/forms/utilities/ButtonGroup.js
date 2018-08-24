import React from 'react';

class ButtonGroup extends React.Component {
  yesColor = () => {
    if (this.props.response === null) return 'btn-light';
    else if (this.props.response)
      //true
      return 'btn-dark';
    //false
    else return 'btn-light';
  };

  noColor = () => {
    if (this.props.response === null) return 'btn-light';
    else if (this.props.response)
      //true
      return 'btn-light';
    //false
    else return 'btn-dark';
  };

  render() {
    return (
      <ButtonGroupLayout
        name={this.props.name}
        label={this.props.label}
        response={this.props.response}
        yesClick={this.props.yesClick}
        yesColor={this.yesColor}
        noClick={this.props.noClick}
        noColor={this.noColor}
      />
    );
  }
}

const ButtonGroupLayout = props => (
  <React.Fragment>
    <label>{props.label}</label>
    <div className="row mb-4">
      <div className="col-6">
        <button
          name={props.name}
          type="button"
          className={`btn ${props.yesColor()} btn-block py-3`}
          onClick={props.yesClick}
        >
          Yes
        </button>
      </div>
      <div className="col-6">
        <button
          name={props.name}
          type="button"
          className={`btn ${props.noColor()} btn-block py-3`}
          onClick={props.noClick}
        >
          No
        </button>
      </div>
    </div>
  </React.Fragment>
);

export default ButtonGroup;
