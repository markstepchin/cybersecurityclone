import React from 'react';

const NextButton = (props) => (
    <div className="my-5">
        <button type="button" className="continue-btn">
            {props.btnText}
            <i className="fas fa-chevron-right"></i>
        </button>
    </div>
)

export default NextButton;