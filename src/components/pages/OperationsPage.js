import React from 'react';
import PageLayout from '../layout/PageLayout';
import SideBar from '../layout/SideBar';
import InfoForm from '../forms/InfoForm';


const OperationsPage = () => (
    <PageLayout
        progress="0%"
        headerText="Tell us about your operations."
        description="Knowing a little about your business's operations will help us identify which coverages your business needs."
        
        form={<InfoForm />}
        sideBar={
        <SideBar 
            heading1='Great Start'
            heading2="Did you know?"
            progress="25%"
            content="Sixty percent of small businesses close within 6 months of a data breach. With CyberPolicy, you're protected
            in the event of a cyber attack, letting you focus on getting back to work."
        />}
    />
)

export default OperationsPage;