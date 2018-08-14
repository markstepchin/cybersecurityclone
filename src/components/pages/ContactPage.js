import React from 'react';
import PageLayout from '../layout/PageLayout';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProgressBarContact from '../layout/ProgressBarContact';
import SideBar from '../layout/SideBar';
import ContactForm from '../forms/ContactForm';


const ContactPage = () => (
    <React.Fragment>
        <Header />
        <ProgressBarContact />
        <PageLayout
            progress="0%"
            headerText="And lastly..."
            description="We're excited to share the cyber insurance options that are best matched for you. We need a little bit of
            contact info to verify that you are you, before showing you the real rates available for purchase for
            your business today."
            
            form={<ContactForm />}
            sideBar={
            <SideBar 
                heading1='Almost done'
                heading2="We'll take it from here!"
                progress="75%"
                content="Thanks for the info! Now sit back, put your feet up and we'll shop multiple leading carriers to match
                you with the best cyber insurance policies for your business. Don't forget, we're in the business
                of protecting your data. You can be guaranteed that we'll never sell or share your info with any
                third parties. For more information, please review our Privacy Policy."
            />}
        />
        <Footer />
    </React.Fragment>
    
)

export default ContactPage;