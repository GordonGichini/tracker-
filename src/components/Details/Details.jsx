import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';

import useStyles from './styles';
import useTransactions from '../../useTransactions.js';

const DetailsCard = ({ title, subheader }) => {
    const { total, chartData } = useTransactions(title);
    const classes = useStyles();

return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={title} subHeader={subheader} />
            <CardContent>
                <Typography variant="h5">${total}</Typography>
                <Doughnut data={chartData} />
            </CardContent>
    </Card>
);
};

export default DetailsCard;
