import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Table } from 'antd';
import './compoundTable.scss';

const CompoundTable = (props) => {

    const columns = [
        {
            title: 'Months',
            dataIndex: 'thisMonth',
            //   width: 150,
        },
        {
            title: 'Contribution',
            dataIndex: 'totalContribution',
            //   width: 150,
        },
        {
            title: 'Interest',
            dataIndex: 'interest',
            //   width: 150,
        },
        {
            title: 'Balance',
            dataIndex: 'totalBalance',
        },
    ];

    const data = [];
    const footer = []
    const returnData = props.interestReturn 

    for (let i = 0; i < returnData.length; i++) {
        data.push({
            key: i,
            thisMonth: returnData[i].thisMonth,
            totalContribution: returnData[i].totalContribution,
            interest: returnData[i].interest,
            totalBalance: returnData[i].totalBalance,
        });
        //footer
        if (i === returnData.length - 1){
            footer.push({
                totalBalance: returnData[i].totalBalance,
            })
        }
    }

    return (
        <div className="table-container">
            {returnData.length > 0 ?
                <>
                    <h3>Investment Breakdown</h3>
                    <div className="line"></div>
                    <Table 
                        columns={columns} 
                        dataSource={data} 
                        scroll={{ y: 500 }}
                        footer={() => `Total balance ${footer[0].totalBalance}`}
                    />
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
    )(CompoundTable)
)