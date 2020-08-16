import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { shallowEqual, useSelector,useDispatch} from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function ChipsArray(props) {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState(props.query);
  React.useEffect(() => {
    setChipData(props.query);
  });
  return (
    <Paper component="ul" className={classes.root}>
      {chipData && chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={()=>props.onDelete(data.key)}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}