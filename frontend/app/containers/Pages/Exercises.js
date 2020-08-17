import React, {useState} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/General/Button";
import COLORS from "../../utils/colors";
import Drawer from "@material-ui/core/Drawer";
import AddExerciseDrawer from "../../components/Exercises/AddExerciseDrawer";
import ExerciseList from "../../components/Exercises/ExerciseList";

const styles = {
    bar: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: COLORS.whiteo,
    },
    exerciseList: {

    }
}

function Exercises(props) {
    const [addDrawerOpened, setAddDrawerOpened] = useState(false);
    const { classes } = props;
    return (
        <div className={classes.page}>
            <div className={classes.bar}>
                <Button onClick={() => setAddDrawerOpened(true)}>
                    Add Exercise
                </Button>
            </div>
            <AddExerciseDrawer open={addDrawerOpened} onClose={() => setAddDrawerOpened(false)}/>
            <ExerciseList/>
        </div>
    );
}


export default withStyles(styles)(connect(null)(Exercises));