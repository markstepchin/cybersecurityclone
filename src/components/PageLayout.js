import React from 'react';

const PageLayout = (props) => (
    <div class="container border pt-5">

        {/* header */}
        <div class="row">
            <div class="col-lg-8 pl-5">
                <h3 class='mb-4'>{props.headerText}</h3>  {/* HEADER */}
            </div>
        </div>
        {/* /header */}

        {/* content */}
        <div class="row">
            <div class="col-lg-8 px-5 ">
                <p class='mb-4'>{props.description}</p>   {/* DESCRIPTION */}

                {props.form}                              {/* FORM */}
            </div>

            <div class="col-lg-4 border-left px-5">
                {props.sideBar}                           {/* SIDEBAR */}
            </div>
        </div>
        {/* /content */}

    </div>
)

export default PageLayout;