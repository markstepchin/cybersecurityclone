import React from 'react';

class CheckBoxInput extends React.Component {
  render() {
    return (
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          name={this.props.name}
          checked={this.props.checked}
          onChange={this.props.onChange}
        />
        <label className="form-check-label check-label">{this.props.label}</label>
      </div>
    );
  }
}

export default CheckBoxInput;
