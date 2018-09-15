import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    menu: {
      width: 200,
    },
  });


class Login extends Component {
    
  constructor(){
    super();
    this.state = {
      formDisplayed : 0
    };
  }

    
    render(){

      let { formDisplayed } = this.state;

      let logInForm = () =>{
        return(
          <form>
            Email:<br />
            <input type="text" name="email" value="" />
            <br/>
            Password:<br/>
            <input type="text" name="password" value="" />
            <br/><br/>
            <input type="submit" value="Log In" />
          </form> 
        )
    };
    
    let signUpForm = () => {
        return(
          <form>
            First name:<br/>
            <input type="text" name="firstname" value="" />
            <br/>
            Last name:<br/>
            <input type="text" name="lastname" value="" />
            <br/><br/>
            <input type="submit" value="Sign Up" />
          </form> 
        )
    };
        return (
            <div>
               <h1>Login</h1>
               { formDisplayed === 0 ? logInForm :signUpForm }
            </div>
        )
    }
}

export default Login;
