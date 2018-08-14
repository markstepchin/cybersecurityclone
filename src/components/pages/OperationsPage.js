import React from 'react';
import {Link} from 'react-router-dom';

import PageLayout from '../layout/PageLayout';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import ProgressBarOperations from '../layout/ProgressBarOperations';
import SideBar from '../layout/SideBar';
import OperationsForm from '../forms/OperationsForm';
import NextButton from '../layout/NextButton';


const OperationsPage = () => (

    <React.Fragment>
        <Header />
        <ProgressBarOperations />

        <PageLayout
            progress="0%"
            headerText="Tell us about your operations."
            description="Knowing a little about your business's operations will help us identify which coverages your business needs."
            
            form={<OperationsForm />}
            nextButton={
                <Link to='./data'>
                    <NextButton btnText='Next' />
                </Link>
            }

            sideBar={
            <SideBar 
                heading1='Great Start'
                heading2="Did you know?"
                progress="25%"
                content="Sixty percent of small businesses close within 6 months of a data breach. With CyberPolicy, you're protected
                in the event of a cyber attack, letting you focus on getting back to work."
            />}
        />

        <Footer />

    </React.Fragment>
    
)

export default OperationsPage;