import React from 'react';
import CompoundForm from './CompoundForm';
import CompoundPieChart from './CompoundPieChart';
import CompoundChart from './CompoundChart';
import CompoundTable from './CompoundTable';
import './compoundPage.scss'

const CompoundPage = () => {

    return (
        <div className='compound-container'>
            <h2>Compound Interest Calculator</h2>
            <div className="line"></div>
            <div className="display-form">
                <CompoundForm />
                <CompoundPieChart />
            </div>
            {/* <CompoundChart /> */}
            <CompoundTable />
        </div>
    );
}

export default CompoundPage;