import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardContent, CardMedia} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme=> ({
  root: {
    maxWidth: '250px',
    border: "none",
    boxShadow: "none",
    [theme.breakpoints.down("md")] : {
    maxWidth: '95%',
    }
  },
  media: {
    height: 160,
  },
  cardContent: {
    padding: 15,
    "&:last-child": {
      paddingBottom: 10
    }
  }
}));

export default function StoryCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={props.featureImage}
          title="Story card"
        />
        <CardContent className={classes.cardContent}>
            <Grid container direction='row' justify='space-between' alignItems='flex-start'>
          <Typography gutterBottom variant='body2' style={{color:'#1b91ff', fontWeight:'600'}}>
            {props.category[0].toUpperCase()}
          </Typography>
          <Typography variant='body1' style={{fontWeight:'600', color:'#000000'}}>
          {props.slug}
          </Typography>
        <Typography style={{color:'#1b91ff', marginTop:'15px', width:'100%'}} variant='subtitle2'>
         {props.displayName}
        </Typography>
        {/* <div style={{display: 'block'}}> */}
        <Typography variant='caption'>
        {props.readTime}
        </Typography>
        {/* </div> */}
        </Grid>
        </CardContent>
    </Card>
  );
}
