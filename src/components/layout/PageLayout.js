import React from 'react';

const PageLayout = (props) => (
    <div className="container border pt-5">

        {/* header */}
        <div className="row">
            <div className="col-lg-8 pl-5">
                <h3 className='mb-4'>{props.headerText}</h3>  {/* HEADER */}
            </div>
        </div>
        {/* /header */}

        {/* content */}
        <div className="row">
            <div className="col-lg-8 px-5 ">
                <p className='mb-4'>{props.description}</p>   {/* DESCRIPTION */}

                {props.form}                              {/* FORM */}
            </div>

            <div className="col-lg-4 border-left px-5">
                {props.sideBar}                           {/* SIDEBAR */}
            </div>
        </div>
        {/* /content */}

    </div>
)

export default PageLayout;