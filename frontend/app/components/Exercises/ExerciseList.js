import React from 'react';
import ExerciseCard from './ExerciseCard';
import withStyles from '@material-ui/core/styles/withStyles';
import {connect} from 'react-redux';
import {getExercisesByUserId} from "../../state/exercises/actions";

const styles = {
  list: {
    marginTop: '1rem',
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  },
};

class ExerciseList extends React.Component {

    componentDidMount() {
        this.props.getExercisesByUserId(this.props.userId, this.props.token);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.list}>
                {this.props.exercises.map(exercise => <ExerciseCard key={exercise.id} exercise={exercise}/>)}
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        userId: state.auth.user.id,
        exercises: state.exercises.exercises,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getExercisesByUserId: (userId, token) => dispatch(getExercisesByUserId(userId, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ExerciseList));
