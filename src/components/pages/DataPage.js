import React from 'react';
import PageLayout from '../layout/PageLayout';
import ProgressBarData from '../layout/ProgressBarData';
import SideBar from '../layout/SideBar';
import DataForm from '../forms/DataForm';


const DataPage = () => (
    <React.Fragment>
        <ProgressBarData />
        <PageLayout
            progress="0%"
            headerText="How does you handle sensitive data?"
            description="Understanding what steps your business currently takes to protect sensitive information helps us match you
            with the right insurance, making sure you're sufficiently covered."
            
            form={<DataForm />}
            sideBar={
            <SideBar 
                heading1='Keep going!'
                heading2="Is your business vulnerable?"
                progress="50%"
                content="Did you know that 2016 was a record year for data breaches? The average total cost of a data breach grew
                to $4 million, crippling many businesses."
            />}
        />
    </React.Fragment>
)

export default DataPage;