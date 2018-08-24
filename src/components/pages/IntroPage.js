import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const IntroPage = () => (
  <React.Fragment>
    <Header />
    <div className="container-fluid progress-nav text-uppercase d-flex justify-content-center empty-nav-height" />
    <div className="container pt-5">
      {/* title */}
      <div className="row">
        <div className="col">
          <h3 className="mb-4">Dear CoverHound/CyberPolicy</h3> {/* TITLE */}
          <p />
        </div>
      </div>
      {/* /title */}

      {/* content */}
      <div className="card-deck my-5">main content</div>
      {/* /content */}
    </div>
    <Footer />
  </React.Fragment>
);

export default IntroPage;

/*
introduce
background
put in effort



*/
