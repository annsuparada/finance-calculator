import React from 'react';
import CompoundForm from './CompoundForm';
import CompoundChart from './CompoundChart';
import CompoundTable from './CompoundTable';


const CompoundPage = () => {
    return ( 
        <div>
            <CompoundForm />
            <CompoundChart />
            <CompoundTable/>
        </div> 
    );
}
 
export default CompoundPage;