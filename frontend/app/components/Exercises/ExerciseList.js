import React from 'react';
import ExerciseCard from './ExerciseCard';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  list: {
    marginTop: '1rem',
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  },
};

function ExerciseList(props) {

  const exercise = {
    title: 'AUGUST 2020',
    month: 8,
    year: 2020,
  }

  const {classes} = props;

  return (
      <div className={classes.list}>
        <ExerciseCard exercise={exercise}/>
        <ExerciseCard exercise={exercise}/>
        <ExerciseCard exercise={exercise}/>
        <ExerciseCard exercise={exercise}/>
        <ExerciseCard exercise={exercise}/>
        <ExerciseCard exercise={exercise}/>
      </div>
  );

}

export default (withStyles(styles)(ExerciseList));
