import React from "react";
import { Link } from "react-router-dom";

import PageLayout from "../layout/PageLayout";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProgressBarInfo from "../layout/ProgressBarInfo";
import SideBar from "../layout/SideBar";
import NextButton from "../layout/NextButton";

import InfoForm from "../forms/InfoForm";

const InfoPage = () => (
  <React.Fragment>
    <Header />
    <ProgressBarInfo />

    <PageLayout
      headerText="Let's get started"
      description="To get started, please tell us a little bit about your business. The whole process only takes about 5 minutes,
            and at the end we'll be able to match you with real cyber insurance rates from top insurance carriers."
      form={<InfoForm />}
      nextButton={
        <Link to="./operations">
          <NextButton btnText="Continue" />
        </Link>
      }
      sideBar={
        <SideBar
          heading1="Secure Your Business"
          heading2="We've got your back!"
          progress="0%"
          content="We were taught to treat people the way we want to be treated. We'll never sell or share your info with
                any third parties because we wouldn't want our info sold or shared with strangers. Your info will
                only be used by us to connect with you and to match you with the best cyber insurance for your business.
                That's it. For more information, please review our Privacy Policy."
        />
      }
    />

    <Footer />
  </React.Fragment>
);

export default InfoPage;
