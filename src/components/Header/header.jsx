import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class Header extends Component {

    render(){
        return (
         <React.Fragment>
          <Grid container>
            <CssBaseline />
              <AppBar position="absolute" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit" noWrap>
                    <h2>Supply Your Teach</h2>
                  </Typography>
                  <Button>
                    <Link to='/teachers'>Teachers</Link> 
                  </Button>
                  <Button>
                    <Link to='/parents'> Parents </Link>
                  </Button>
                  <Button>
                    <Link to='/support'>Support</Link>
                  </Button>
                  <Button color="primary" variant="outlined">
                  <Link to='/login'>Login</Link>
                  </Button>
                </Toolbar>
              </AppBar>
            </Grid>
          </React.Fragment>
        )
    }
}

export default Header;
