import React from 'react';
import SideBar from './SideBar';
import Form from './Form';

const PageContent = () => (
    <div class="container border pt-5">

        {/* header */}
        <div class="row">
            <div class="col-lg-8 pl-5">
                <h3 class='mb-4'>Let's get started</h3>
            </div>
        </div>

        {/* content */}
        <div class="row">
            <div class="col-lg-8 px-5 ">

                {/* description */}
                <p class='mb-4'>To get started, please tell us a little bit about your business. The whole process only takes about 5 minutes,
                    and at the end we'll be able to match you with real cyber insurance rates from top insurance carriers.</p>

                <Form />
            </div>

            <div class="col-lg-4 border-left px-5">
                <SideBar />
            </div>
        </div>
    </div>
)

export default PageContent;