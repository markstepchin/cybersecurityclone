import React from 'react';

const SideBar = (props) => (
    <React.Fragment>
        <div class='text-center border-bottom d-none d-lg-block pb-4'>
            <h6>{props.heading1}</h6>
            <h1>0%</h1>
        </div>
        <div class='my-5'>
            <h5>{props.heading2}</h5>
            <p>{props.content}</p>
        </div>
    </React.Fragment>
)

export default SideBar;