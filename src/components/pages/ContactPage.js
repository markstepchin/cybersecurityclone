import React from 'react';
import PageLayout from '../layout/PageLayout';
import SideBar from '../layout/SideBar';
import InfoForm from '../forms/InfoForm';


const ContactPage = () => (
    <PageLayout
        progress="0%"
        headerText="And lastly..."
        description="We're excited to share the cyber insurance options that are best matched for you. We need a little bit of
        contact info to verify that you are you, before showing you the real rates available for purchase for
        your business today."
        
        form={<InfoForm />}
        sideBar={
        <SideBar 
            heading1='Almost done'
            heading2="We'll take it from here!"
            content="Thanks for the info! Now sit back, put your feet up and we'll shop multiple leading carriers to match
            you with the best cyber insurance policies for your business. Don't forget, we're in the business
            of protecting your data. You can be guaranteed that we'll never sell or share your info with any
            third parties. For more information, please review our Privacy Policy."
        />}
    />
)

export default ContactPage;