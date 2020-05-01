import React, { useState } from 'react';
import { compoundCalculator } from '../../store/actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, InputNumber } from 'antd';

const CompoundForm = (props) => {
    const [form, setForm] = useState({
        initialInvestment: null,
        monthlyContribution: null,
        years: null,
        interestRate: null,
    })
    console.log("form", form)

    const handleChange = (e) => {
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
            {console.log('interestReturn',props.interestReturn)}
            <form onSubmit={handdleSubmit} style={{ display: "flex", flexDirection: "column", width: "250px" }}> 
                <label>Initial Investment</label>
                <input 
                    type="number"
                    placeholder="Initial Investment"
                    name="initialInvestment"
                    value={form.initialInvestment}
                    onChange={handleChange}
                />
                <label>Monthly Contribution</label>
                <input 
                    type="number"
                    placeholder="Monthly Contribution"
                    name="monthlyContribution"
                    value={form.monthlyContribution}
                    onChange={handleChange}
                />
                <label>Years</label>
                <input 
                    type="number"
                    placeholder="Years"
                    name="years"
                    value={form.years}
                    onChange={handleChange}
                />
                <label>Interest Rate</label>
                <input 
                    type="number"
                    placeholder="Interest Rate"
                    name="interestRate"
                    value={form.interestRate}
                    onChange={handleChange}
                />
                <button onClick={e => handdleSubmit(e)}>Calculate</button>
            </form>
            {
                props.interestReturn && props.interestReturn.map(el => (
                    <p>{el.monthlyContribution}</p>
                ))
            }
         
        </div>
    );
}

const mapStateToprops = state => ({
    interestReturn: state.compoundInterestReducer.interestReturn,
})
export default withRouter(
    connect(
        mapStateToprops,
        { compoundCalculator }
    )(CompoundForm)
)