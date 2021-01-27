import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { FeedCard } from './FeedCard';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 'auto',
    maxWidth: 1200
  },
}));

export default function Feed(props) {
  const classes = useStyles();
  const [items, setItems] = React.useState([]);
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
                <FeedCard  item={item} index={index}/>
              )
            })
          }     
      </Grid>
    </div>
  );
}


