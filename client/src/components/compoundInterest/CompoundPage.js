import React from 'react';
import CompoundForm from './CompoundForm';
import CompoundChart from './CompoundChart';
import CompoundTable from './CompoundTable';
import './compoundPage.scss'

const CompoundPage = () => {
    return ( 
        <div className='compound-container'>
            <CompoundForm />
            <CompoundChart />
            <CompoundTable />
        </div> 
    );
}
 
export default CompoundPage;