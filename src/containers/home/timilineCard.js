import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Hidden } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:"100%"
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '50%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export  function MediaControlCard(props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
          <CardMedia
        className={classes.cover}
        image={props.data.image}
        title="Live from space album cover"
      />
      <Hidden smDown>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
        </CardContent>
     
      </div>
      </Hidden>
    
    </Card>
  );
}