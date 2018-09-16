import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';


class Header extends Component {

    render(){
        return (
          <Grid container>
            <Grid item xs={12}>
            <CssBaseline />
              <AppBar position="absolute" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit" noWrap>
                    Supply Your Teach
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
          </Grid>
        )
    }
}

export default Header;
