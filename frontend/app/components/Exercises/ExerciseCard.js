import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import withStyles from '@material-ui/core/styles/withStyles';
import {Link} from 'react-router-dom';
import Button from "../General/Button";
import COLORS from "../../utils/colors";

const styles = {
  card: {
    width: '100%',
    backgroundColor: COLORS.whiteo,
    borderRadius: '3px',
    color: COLORS.lightGray,
  },
  content: {
    fontSize: '1rem',
  },
  mr: {
    fontWeight: 'bold',
    marginRight: '10px',
  },
  important: {
    padding: '2px 2px',
    margin: '0 1px',
    background: COLORS.important,
    color: COLORS.gray,
    fontSize: '.9rem',
    fontWeight: 'bold',
  },
  label: {
    textTransform: 'uppercase',
    fontSize: '.9rem',
    fontWeight: 600,
    letterSpacing: '1px',
    marginRight: '.7rem',
  },
  period: {
    margin: '5px 0',
  },
  link: {
    textDecoration: 'none',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '1rem',
  },
};

function ExerciseCard(props) {
  const {classes, exercise} = props;
  // const url = `/exercise/${exercise.id}`;
  return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <span className={classes.mr}>{exercise && exercise.title}</span>
            <div className={classes.period}>
              <span className={classes.label}> Month </span>
              <span className={classes.important}> {exercise.month} </span>
            </div>
            <div className={classes.period}>
              <span className={classes.label}> Year </span>
              <span className={classes.important}> {exercise.year} </span>
            </div>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Link className={classes.link} to='/'>
            <Button>
              Enter
            </Button>
          </Link>
        </CardActions>
      </Card>
  );
}

export default withStyles(styles)(ExerciseCard);
