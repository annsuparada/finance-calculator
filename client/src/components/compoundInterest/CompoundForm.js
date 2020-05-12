import React, { useState } from 'react';
import { compoundCalculator } from '../../store/actions/index';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Form, Input, Button, InputNumber, DatePicker } from 'antd';
import './compoundForm.scss';

const CompoundForm = (props) => {
    const [form, setForm] = useState({
        initialInvestment: null,
        monthlyContribution: null,
        years: null,
        interestRate: null,
        // date: '',
    })
    

    const handleChange = e => {
        // e.preventDefault()
       setForm({ 
            ...form,
            [e.target.name]: Number(e.target.value)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       props.compoundCalculator(
            form.initialInvestment,
            form.monthlyContribution,
            form.years,
            form.interestRate
        )
        
    
    }
    function onChangeDate(date, dateString) {
        // console.log(date, dateString)
        // setForm({ 
        //     ...form,
        //     date: e.target.date
            
        // })
      }

    return (  
        <div className="form-container">
            <h1>Compound Interest Calculator</h1>
            {/* style={{ display: "flex", flexDirection: "column", width: "250px" }} */}
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
                {/* <DatePicker  
                    // name="date"
                    // value={form.date}
                    onChange={onChangeDate}
                /> */}
                <button onClick={handleSubmit}>Calculate</button>
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