import React, { useState } from 'react';
import { compoundCalculator } from '../../store/actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';

const CompoundForm = (props) => {
    const [form, setForm] = useState({
        initialInvestment: 100,
        monthlyContribution: 10,
        years: 3,
        interestRate: 10,
        date: "",
    })
    

    const handleChange = (e) => {
        console.log(e.target.value)
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
            <form onSubmit={handdleSubmit} style={{ display: "flex", flexDirection: "column", width: "250px" }}> 
                <label>Initial Investment</label>
                <InputNumber
                    type="number"
                    placeholder="Initial Investment"
                    name="initialInvestment"
                    value={form.initialInvestment}
                    onChange={handleChange}
                />
                <label>Monthly Contribution</label>
                <InputNumber
                    // type="number"
                    placeholder="Monthly Contribution"
                    name="monthlyContribution"
                    value={form.monthlyContribution}
                    onChange={handleChange}
                />
                <label>Years</label>
                <InputNumber
                    // type="number"
                    placeholder="Years"
                    name="years"
                    value={form.years}
                    onChange={handleChange}
                />
                <label>Interest Rate</label>
                <InputNumber
                    // type="number"
                    placeholder="Interest Rate"
                    name="interestRate"
                    value={form.interestRate}
                    onChange={handleChange}
                />
                <DatePicker  
                    // name="interestRate"
                    // value={form.date}
                    // onChange={handleChange}
                />
                <button onClick={e => handdleSubmit(e)}>Calculate</button>
            </form>
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