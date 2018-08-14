import React from 'react'
import Header from './Header'
import Footer from './Footer'

const QuotesPageLayout = (props) => (

    <React.Fragment>

        <Header />
        {/* empty progress bar */}
        <div class="container-fluid progress-nav text-uppercase d-flex justify-content-center empty-nav-height"></div>

        <div className="container pt-5">

            {/* title */}
            <div className="row">
                <div className="col">
                    <h3 className='mb-4'>{props.titleText}</h3>  {/* TITLE */}
                </div>
            </div>
            {/* /title */}

            {/* content */}
            <div class="card-deck my-5">

            </div>
            {/* /content */}

            {props.nextButton}

        </div>

        <Footer />

    </React.Fragment>
)

export default QuotesPageLayout;