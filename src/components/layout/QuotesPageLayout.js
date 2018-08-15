import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const QuotesPageLayout = props => (
  <React.Fragment>
    <Header />
    {/* empty progress bar */}
    <div className="container-fluid progress-nav text-uppercase d-flex justify-content-center empty-nav-height" />

    <div className="container pt-5">
      {/* title */}
      <div className="row">
        <div className="col">
          <h3 className="mb-4">{props.titleText}</h3> {/* TITLE */}
          <p>{props.description}</p>
        </div>
      </div>
      {/* /title */}

      {/* content */}
      <div className="card-deck my-5">{props.children}</div>
      {/* /content */}

      {props.nextButton}
    </div>

    <Footer />
  </React.Fragment>
);

export default QuotesPageLayout;
