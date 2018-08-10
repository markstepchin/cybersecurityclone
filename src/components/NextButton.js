import React from 'react';

const NextButton = (props) => (
    <div class="my-5">
        <button type="button" class="continue-btn">
            {props.btnText}
            <i class="fas fa-chevron-right"></i>
        </button>
    </div>
)

export default NextButton;