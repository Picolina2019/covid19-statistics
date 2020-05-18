import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'


export const Navbar = () => {
    return (
        <AppBar position="static">
  <Toolbar>
   
    <Typography variant="h6" style={{flexGrow:"1"}}>
      COVID-19
    </Typography>
    
    <Button color="inherit" component={Link} to="/">Summary</Button>
    <Button color="inherit" component={Link} to="/detailed">Detailed</Button>
   
  </Toolbar>
</AppBar>
    )        
    }