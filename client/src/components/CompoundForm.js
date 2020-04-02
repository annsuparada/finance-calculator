import React, { useState } from 'react';
import { compoundInterest } from '../function/calculatorsFunc';
import { Form, Input, Button, InputNumber } from 'antd';

const CompoundForm = () => {
    const [form, setForm] = useState({
        initialInvestment: null,
        monthlyContribution: null,
        years: null,
        interestRate: null,
    })

    const handdleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        setForm({ 
            ...form,
            [e.target.name]: Number(e.target.value)
            
        })
    }

    const handdleSubmit = (e) => {
        e.preventDefault()
        console.log(compoundInterest(
            form.initialInvestment,
            form.monthlyContribution,
            form.years,
            form.interestRate
        ))
        // console.log(form.initialInvestment)
        // setForm({
        //     initialInvestment: "",
        //     monthlyContribution: "",
        //     years: "",
        //     interestRate: "",
        // })
    }

    return (  
        <div>
            {console.log(form)}
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
 
export default CompoundForm;