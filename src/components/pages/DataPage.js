import React from 'react';
import PageLayout from '../layout/PageLayout';
import SideBar from '../layout/SideBar';
import InfoForm from '../forms/InfoForm';


const DataPage = () => (
    <PageLayout
        progress="0%"
        headerText="How does you handle sensitive data?"
        description="Understanding what steps your business currently takes to protect sensitive information helps us match you
        with the right insurance, making sure you're sufficiently covered."
        
        form={<InfoForm />}
        sideBar={
        <SideBar 
            heading1='Keep going!'
            heading2="Is your business vulnerable?"
            content="Did you know that 2016 was a record year for data breaches? The average total cost of a data breach grew
            to $4 million, crippling many businesses."
        />}
    />
)

export default DataPage;