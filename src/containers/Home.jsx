import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

class Home extends Component {

    render(){
        return (
            <div>
                <h1>Home </h1>
                <Button variant="contained" color="primary">
                  Lets get this started
                </Button>
            </div>
        )
    }
}

export default Home;
