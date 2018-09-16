import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Paper, Card, FormControl, TextField, Button } from '@material-ui/core';

class Login extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            userName : '',
            userPw : '',
            userAuthenicated : false
        };
    }

    authenicateUser = () => {

    }

    render(){
        return(
            <Grid container  justify="center">
                <Grid item xs={12}>
                    <Card>
                        <Grid container >
                            <Grid item xs={6} justify="center">
                                <h1>SupplyYourTeach</h1>
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    id='userName'
                                    label="User Name"
                                    margin='normal'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField
                                    id='userPw'
                                    label='Password'
                                    margin='normal'
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.authenicateUser}
                                >
                                    Log In
                                </Button>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
    );
    }
}

export default Login;
