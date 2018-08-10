import React from 'react';
import PageLayout from './PageLayout';
import Form from './Form';
import SideBar from './SideBar';

const InfoPage = () => (
    <PageLayout
        headerText="Let's get started"
        description="To get started, please tell us a little bit about your business. The whole process only takes about 5 minutes,
        and at the end we'll be able to match you with real cyber insurance rates from top insurance carriers."
        form={<Form />}
        sideBar={<SideBar />}
    />
)

export default InfoPage;