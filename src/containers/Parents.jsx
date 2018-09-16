import React, { Component } from 'react';
import { Grid, Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Avatar, Typography, withStyles } from '@material-ui/core';
import red from '@material-ui/core/colors/red';


const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });


class Parents extends Component {

    constructor(){
        super();
        this.state = {
            teachersList : []
        }
    }



    componentDidMount(){
        this.getTeachersList();
    }

    getTeachersList = async () => {
        const apiKey = '56b96275775e2321f04cd9af3ea708f3';
        const apiUrl = 'https://api.themoviedb.org/3/movie/popular';
        const response = await fetch(apiUrl + '?api_key=' + apiKey);
        const data = await response.json();
        console.log('-------')
        console.log(data)
        this.setState({teachersList: data.results}) 
    }

    render(){

        let { teachersList } = this.state;
        // console.log(this.state.teachersList)
        // console.log(teachersList)
        let listItems = teachersList.map(function(listItem){
            let itemImg = "url('https://image.tmdb.org/t/p/w300" + listItem.poster_path + "')";
            return  <Card>
                        <CardHeader
                            title={listItem.title}
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            image={itemImg}
                            title={listItem.release_date}
                        />
                        <CardContent>
                            <Typography component="p">
                                {listItem.overview}
                            </Typography>
                        </CardContent>
                    </Card>
        });

        return (
            <Grid container>
                <Grid item xs={8}>
                    { listItems }
                </Grid>
            </Grid>
        )
    }
}

export default Parents;
