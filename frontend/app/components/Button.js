import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../utils/colors";

const styles = {
    button: {
        backgroundColor: COLORS.c4,
        color: COLORS.white,
        padding: '10px 20px',
        width: 'fit-content',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '2px',
        '&:hover': {
            backgroundColor: COLORS.c3,
            color: COLORS.white,
        }
    }
}

function Button(props) {
    const {classes} = props;
    return (
        <button type={props.type} className={classes.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default withStyles(styles)(Button);