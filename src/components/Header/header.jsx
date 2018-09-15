import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Header extends Component {

    render(){
        return (
          <div>
            <CssBaseline />
              <AppBar position="absolute" color="default">
                <Toolbar>
                  <Typography variant="title" color="inherit" noWrap>
                    Supply Your Teach
                  </Typography>
                </Toolbar>
              </AppBar>
          </div>
        )
    }
}

export default Header;
