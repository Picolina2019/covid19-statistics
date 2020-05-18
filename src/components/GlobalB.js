import React from 'react';
import { Paper, Grid, Typography } from '@material-ui/core';
import NumberFormat from 'react-number-format';

export const GlobalB = ({data:{TotalConfirmed, TotalDeaths, TotalRecovered}}) => {
    const style= {
        padding:'2rem',
        
    }
 
    return (
        <Paper style={style} >
            <Grid container >
           <Grid item xs={6} md={3}>
               <Typography variant='h5' >Global</Typography>
           </Grid>
           <Grid item xs={6} md={3}>
               <Typography variant='h6' style={{color:'purple'}}>Confirmed: <NumberFormat value={TotalConfirmed} displayType={'text'}
           thousandSeparator={true}/>
 </Typography>
           </Grid>
           <Grid item xs={6} md={3}>
               <Typography variant='h6' style={{color:'red'}}>Deaths: <NumberFormat value={TotalDeaths} displayType={'text'}
           thousandSeparator={true}/></Typography>
           </Grid>
           <Grid item xs={6} md={3}>
               <Typography variant='h6' style={{color:'green'}}>Recovered: <NumberFormat value={TotalRecovered} displayType={'text'}
           thousandSeparator={true}/></Typography>
           </Grid>
           </Grid>
       </Paper>
    )
}
