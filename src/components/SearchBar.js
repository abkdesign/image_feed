import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import {throttle} from './../utils/utilHelpers';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const [searchString, setSearchString] = React.useState('');
  const inputCallback = React.useCallback(
    (value) => {
      setSearchString(value.target.value)
      props.onChange(value.target.value);
    },
    [searchString],
  );
  return (  
    <form onSubmit={e => { e.preventDefault(); }}>
      <Paper component="form" className={classes.root}>
          <IconButton className={classes.iconButton} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            onChange={inputCallback}
            className={classes.input}
            placeholder="Search Flickr images"
            inputProps={{ 'aria-label': 'Search Flickr images' }}
          />
          <IconButton onClick={inputCallback} className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider className={classes.divider} orientation="vertical" />
          <IconButton color="primary" className={classes.iconButton} aria-label="directions">
            <DirectionsIcon />
          </IconButton>
    
      </Paper>    
    </form>
  );
}