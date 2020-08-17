import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Moment from 'react-moment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    display:'flex',
    flexDirection:'column',
    minHeight:400,
    color: theme.palette.text.secondary,
  },
}));

export default function Feed(props) {
  const classes = useStyles();
  const [items, setItems] = React.useState(props.items);
  React.useEffect(() => {
    setItems(props.items)
    },[props.items]
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
          {
            items.map((item, index)=>{
              return(  
                <Grid key={index} item xs={6} md={3} lg={2}>
                  <Paper className={classes.paper}>
                    <h1 style={{fontSize:14}}>{item.title}</h1>
                    <h3>{item.m}</h3> 
                    <a href={item.link}>
                      <img src={item.media.m} />
                    </a>
                     <h3 className="tagInput__tag">{item.tags}</h3>
                     <Moment format='YYYY-MM-DD'>
                       {new Date(item.published).toString()}
                       </Moment>
                  </Paper>
                </Grid>
              )
            })
          }     
      </Grid>
    </div>
  );
}


