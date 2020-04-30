import React, { useState } from 'react';
import { compoundCalculator } from '../store/actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, InputNumber } from 'antd';

const CompoundForm = (props) => {
    const [form, setForm] = useState({
        initialInvestment: props.compoundInterest.initialInvestment,
        monthlyContribution: props.compoundInterest.monthlyContribution,
        years: props.compoundInterest.years,
        interestRate: props.compoundInterest.interestRate,
    })
    console.log("form", form)

    const handdleChange = (e) => {
        e.preventDefault()
        setForm({ 
            ...form,
            [e.target.name]: Number(e.target.value)
            
        })
    }

    const handdleSubmit = (e) => {
        e.preventDefault()
       props.compoundCalculator(
            form.initialInvestment,
            form.monthlyContribution,
            form.years,
            form.interestRate
        )
    
    }

    return (  
        <div>
            {console.log('compoundInterest', form.initialInvestment)}
            {console.log('interestReturn',props.interestReturn)}
            <form onSubmit={handdleSubmit} style={{ display: "flex", flexDirection: "column", width: "250px" }}> 
                <label>Initial Investment</label>
                <input 
                    type="number"
                    placeholder="Initial Investment"
                    name="initialInvestment"
                    value={form.initialInvestment}
                    onChange={handdleChange}
                />
                <label>Monthly Contribution</label>
                <input 
                    type="number"
                    placeholder="Monthly Contribution"
                    name="monthlyContribution"
                    value={form.monthlyContribution}
                    onChange={handdleChange}
                />
                <label>Years</label>
                <input 
                    type="number"
                    placeholder="Years"
                    name="years"
                    value={form.years}
                    onChange={handdleChange}
                />
                <label>Interest Rate</label>
                <input 
                    type="number"
                    placeholder="Interest Rate"
                    name="interestRate"
                    value={form.interestRate}
                    onChange={handdleChange}
                />
                <button onClick={e => handdleSubmit(e)}>Calculate</button>
            </form>
            <p>
              
            </p>
         
        </div>
    );
}

const mapStateToprops = state => ({
    compoundInterest: state.compoundInterestReducer.compoundInterest,
    interestReturn: state.compoundInterestReducer.interestReturn,
})
export default withRouter(
    connect(
        mapStateToprops,
        { compoundCalculator }
    )(CompoundForm)
)