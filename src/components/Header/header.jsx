import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Header extends Component {

    render(){
        return (
          <div>
              <h1>Header </h1>
              <Button variant="contained" color="primary">
                this is the header
              </Button>
          </div>
        )
    }
}

export default Header;
