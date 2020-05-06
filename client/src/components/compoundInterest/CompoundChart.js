import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const CompoundChart = (props) => {
    const data = [
        // {
        //     name: '2020', contribution: 10, balance: 10, 
        // },
        // {
        //     name: '2021', contribution: 20, balance: 25, 
        // },
        // {
        //     name: '2022', contribution: 30, balance: 40, 
        // },
        // {
        //     name: '2023', contribution: 40, balance: 60, 
        // },
        // {
        //     name: '2024', contribution: 50, balance: 80, 
        // },
        // {
        //     name: '2025', contribution: 60, balance: 100, 
        // },
        // {
        //     name: '2026', contribution: 70, balance: 120, 
        // },
        
    ];
    const returnData = props.interestReturn 
        
            for (let i = 0; i < returnData.length; i++) {
                if (i === 0 || returnData[i].monthNum === 12) {
                    data.push({
                        name: returnData[i].yearOnly,
                        totalContribution: returnData[i].totalContribution,
                        totalBalance: returnData[i].totalBalance,
                    });
            }
        }

    return (
        <div>
            {returnData.length > 0 ? 
            <>

            CompoundChart
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="totalBalance" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="totalContribution" stroke="#82ca9d" />
            </LineChart>
                </> 
                : null  
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
        null
    )(CompoundChart)
)

