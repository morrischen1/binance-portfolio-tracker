import React from 'react';

const Dashboard = ({balances, performance}) => {
    const totalValue = balances.reduce((sum, balance) => sum + parseFloat(balance.value || 0), 0);

    return(
        <section className = 'dashboard'>
            <h2>Dashboard</h2>
            <div className = 'stats'>
                <div>Total Portfolio Value: ${totalValue.toFixed(2)}</div>
                <div>Profit/Loss: ${performance.profitLoss}</div>
                <div>Percentage Change: ${performance.percentageChange || 0}%</div>
            </div>
        </section>
    );
};
