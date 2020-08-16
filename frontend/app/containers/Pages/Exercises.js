import React, {useState} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../../components/Button";
import COLORS from "../../utils/colors";
import Drawer from "@material-ui/core/Drawer";
import AddExerciseDrawer from "./AddExerciseDrawer";

const styles = {
    bar: {
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: COLORS.whiteo,
    },
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
        </div>
    );
}

function mapStateToProps(state) {
    return {};
}

export default withStyles(styles)(connect(mapStateToProps,)(Exercises));