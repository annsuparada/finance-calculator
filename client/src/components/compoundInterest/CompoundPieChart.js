import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compoundCalculator } from '../../store/actions/index';
import {
  PieChart, Pie, Sector, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};


//get initial investment from state
//get contribution from returnData - init
//get total interest from return data
// get future value from return date

const CompoundPieChart = (props) => {
  let initialInvestment = props.compound.initialInvestment;
  let contribution = 0 - initialInvestment;
  let futureValue = 0;
  let totalInterest = 0;

  // initialInvestment = props.compound.initialInvestment;
  const returnData = props.interestReturn;

  for (let i = 0; i < returnData.length; i++) {
    if (i === returnData.length - 1) {
      contribution += returnData[i].totalContribution
      totalInterest += returnData[i].totalInterest
      futureValue += returnData[i].totalBalance
    }
  }
  const data = [
    { name: 'Inital Investment', value: initialInvestment },
    { name: 'Contribution', value: contribution },
    { name: 'Total Interest', value: totalInterest },
  ];

  return (
    <div>
      {/* {console.log('test', initialInvestment, contribution, futureValue, totalInterest)} */}
      <div className="text">
        <h4>Future Value</h4>
        <h4>$ {futureValue}</h4>
      </div>
      <div className="line"></div>

      <div className="text">
        <div className="left-side-list">
          <div className="init-bullet"></div>
          <p>Initial Investment </p>
        </div>
        <p>$ {initialInvestment}</p>
      </div>

      <div className="text">
        <div className="left-side-list">
          <div className="contrib-bullet"></div>
          <p>Contribution</p>
        </div>
        <p>$ {contribution}</p>
      </div>

      <div className="text">
        <div className="left-side-list">
          <div className="interest-bullet"></div>
          <p>Total Interest</p>
        </div>
        <p>$ {totalInterest}</p>
      </div>

      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={185}
          cy={160}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={130}
          fill="#8884d8"
          dataKey="value"
        >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
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
  )(CompoundPieChart)
)