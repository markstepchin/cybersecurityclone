import React from 'react';

class ButtonGroup extends React.Component {

    yesClick = () => {
        if (!this.props.response) //if no, change
            this.props.toggle();
    }

    noClick = () => {
        if (this.props.response) //if yes, change
            this.props.toggle();
    }

    render() {
        return (
            <ButtonGroupLayout
                label={this.props.label}
                response={this.props.response}
                yesClick={this.yesClick}
                noClick={this.noClick}
            />
        )
    }
}

const ButtonGroupLayout = (props) => (
    <React.Fragment>
        <label>
            {props.label}
        </label>
        <div className="row mb-4">
            <div className="col-6">
                <button
                    type="button"
                    className={`btn ${props.response ? 'btn-dark' : 'btn-light'} btn-block py-3`}
                    onClick={props.yesClick}
                >
                    Yes
                </button>
            </div>
            <div className="col-6">
                <button
                    type="button"
                    className={`btn ${props.response ? 'btn-light' : 'btn-dark'} btn-block py-3`}
                    onClick={props.noClick}
                >
                    No
                </button>
            </div>
        </div>
    </React.Fragment >
)

export default ButtonGroup;