import React, { useState, useEffect } from 'react';
import { compoundCalculator } from '../../store/actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';
import './compoundForm.scss';

const CompoundForm = (props) => {
    let state = props.compound;

    const [form, setForm] = useState({
        initialInvestment: state.initialInvestment,
        monthlyContribution: state.monthlyContribution,
        years: state.years,
        interestRate: state.interestRate,
    })

    const handleChange = e => {
       setForm({ 
            ...form,
            [e.target.name]: Number(e.target.value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       props.compoundCalculator(
            form.initialInvestment,
            form.monthlyContribution,
            form.years,
            form.interestRate
        )
    }

    useEffect(() => {
      props.compoundCalculator(
        form.initialInvestment,
        form.monthlyContribution,
        form.years,
        form.interestRate
      )
    }, [])

    return (  
        <div className="form-container">
            
            <form onSubmit={handleSubmit} > 
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
                <label>Length of Time in Years</label>
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
                <button onClick={handleSubmit}>Calculate</button>
            </form>
        </div>
    );
}

const mapStateToprops = state => ({
    interestReturn: state.compoundInterestReducer.interestReturn,
    compound: state.compoundInterestReducer.compound,
})
export default withRouter(
    connect(
        mapStateToprops,
        { compoundCalculator }
    )(CompoundForm)
)