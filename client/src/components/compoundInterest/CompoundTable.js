import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Table } from 'antd';

const CompoundTable = (props) => {

    const columns = [
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
    const returnData = props.interestReturn
    for (let i = 0; i < returnData.length; i++) {
        data.push({
            key: i,
            totalContribution: returnData[i].totalContribution,
            interest: returnData[i].interest,
            totalBalance: returnData[i].totalBalance,
        });
    }

    return (
        <div>
            {console.log('return', props.interestReturn)}

            {returnData.length > 0 ?
                <>
                    <h3>Investment Breakdown</h3>
                    <Table columns={columns} dataSource={data} scroll={{ y: 500 }} style={{ width: "500px" }} />
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