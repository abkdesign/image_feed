import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(4),
      textAlign: 'center',
      display:'flex',
      flexDirection:'column',
      minHeight:400,
      color: theme.palette.text.secondary,
    },
  }));

export const FeedCard = (props) => {
    const { item, index } = props;
    const classes = useStyles();
    return (
        <Grid key={index} item xs={6}>
            <Paper className={classes.paper}>
            <h1 style={{fontSize:14}}>{item.title}</h1>
            <h3>{item.m}</h3> 
            <a href={item.link}>
                <img src={item.media.m} alt="media"/>
            </a>
            <h3 className="tagInput__tag">{item.tags}</h3>
            <Moment format='YYYY-MM-DD'>
                {new Date(item.published).toString()}
                </Moment>
            </Paper>
        </Grid>
    )
}
