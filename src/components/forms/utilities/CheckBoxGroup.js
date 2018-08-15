import React from "react";
import CheckBoxInput from "../utilities/CheckBoxInput";

/*
The none field is a variable computed on the fly that displays and toggles the value of other fields
*/

class CheckBoxGroup extends React.Component {
  uncheckChildren = event => {
    // React.Children.map(children, (child) => {
    //     child.props.unClick();
    // })
    console.log(event);
  };

  noChildChecked = children => {
    let didntFindChecked = true;

    React.Children.map(children, child => {
      if (child.props.checked) {
        didntFindChecked = false;
      }
    });

    return didntFindChecked;
  };

  render() {
    return (
      <div className="mb-4">
        <label>
          {this.props.label}
          {this.props.children}
          {this.props.noneOption ? (
            <CheckBoxInput
              label="None"
              checked={this.noChildChecked(this.props.children)}
              onChange={this.uncheckChildren}
            />
          ) : null}
        </label>
      </div>
    );
  }
}

export default CheckBoxGroup;
