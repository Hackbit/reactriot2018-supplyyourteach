import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    background: {
        "default": "#fafafa",
        "paper": "#fff",
        "appBar": "#000000",
        "contentFrame": "#eeeeee"
    }
});

 function Root(){
    return (
        <MuiThemeProvider theme={theme}>
            <App />
        </MuiThemeProvider>
    );
}
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
