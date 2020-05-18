import React from 'react'
import { Paper, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';


export const Country = ({data:{Country,TotalConfirmed, TotalDeaths, TotalRecovered}}) => {
    return (
       <Paper style={{padding:'0.5rem'}}>
           <Typography variant='h6' style={{textAlign:'center', color:'darkBlue'}}>{Country} </Typography>
    <Typography variant='subtitle1'>Confirmed: <NumberFormat style={{color:'purple', textAlign:'center'}} value={TotalConfirmed} displayType={'text'}
           thousandSeparator={true}/></Typography>
    <Typography variant='subtitle1'>Deaths: <NumberFormat style={{color:'red'}} value={TotalDeaths}displayType={'text'}
           thousandSeparator={true}/></Typography>
           <Typography variant='subtitle1'>Recovered: <NumberFormat style={{color:'green'}} value={TotalRecovered} displayType={'text'}
           thousandSeparator={true}/></Typography>
       </Paper>
    )
}
