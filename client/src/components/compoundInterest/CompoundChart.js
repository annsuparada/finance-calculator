import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import './compoundChart.scss';
import ComopundPieChart from './CompoundPieChart';

const CompoundChart = (props) => {
    const data = [];
    const returnData = props.interestReturn
    const totalData = []

    for (let i = 0; i < returnData.length; i++) {
        if (i === 0 || returnData[i].monthNum === 12 || i === returnData.length - 1) {
            data.push({
                name: returnData[i].yearOnly,
                Contribution: returnData[i].totalContribution,
                Balance: returnData[i].totalBalance,
            });
        }
        if (i === returnData.length - 1) {
            totalData.push({
                totalContribution: returnData[i].totalContribution,
                totalInterest: returnData[i].totalInterest,
                totalBalance: returnData[i].totalBalance,
            })
        }
    }

    return (
        <div>
            {console.log(returnData)}
            {returnData.length > 0 ?
                <div className="chart-container">
                    {/* CompoundChart */}
                    {/* <div style={{ width: '100%', height: 400 }}>  */}
                     {/* <ResponsiveContainer > */}
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
                        <Line type="monotone" dataKey="Balance" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="Contribution" stroke="#82ca9d" />
                    </LineChart>
                    {/* </ResponsiveContainer> */}
                    {/* </div> */}
                    <div className="right">
                        <h4>Contribution: {totalData[0].totalContribution}</h4>
                        <h4>Interest: {totalData[0].totalInterest}</h4>
                        <h4>Balance: {totalData[0].totalBalance}</h4>
                    </div>

                </div>
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

