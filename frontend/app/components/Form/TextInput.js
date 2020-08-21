import React from 'react';
import COLORS from "../../utils/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";

const styles = {
    'MuiInput-underline': {
        borderBottomColor: COLORS.c6,
    },
    formInput: {
        width: '100%',
        '& label.Mui-focused': {
            color: 'lightGray',
        },
        '& .MuiFormLabel-root': {
            color: COLORS.lightGray
        },
        'MuiInput-underline': {
            borderBottomColor: COLORS.c5,
        },
        '& .MuiInput-root': {
            '& fieldset': {
                borderColor: COLORS.c0,
                color: COLORS.c0,
            },
            '&:hover fieldset': {
                borderColor: COLORS.lightGray,
                color: COLORS.white,
            },
            '&.Mui-focused fieldset': {
                borderColor: COLORS.lightGray,
                color: COLORS.white,
            },
        },
        '& .MuiInputBase-input': {
            color: COLORS.c1,
        }
    },
    error: {
        color: COLORS.error,
        fontSize: '.8rem',
    },
    formControl: {
        width: '100%',
        marginBottom: '1.5rem',
    }
}

function TextInput(props) {
    const {classes} = props;
    const label = props.label.charAt(0).toUpperCase() + props.label.toLowerCase().slice(1);
    return (
        <FormControl className={classes.formControl}>
            <TextField
                className={classes.formInput}
                // variant="filled"
                type={props.type}
                label={label}
                name={props.label}
                value={props.value}
                onChange={props.onChange}
            />
            <div className={classes.error}> {props.error} </div>
        </FormControl>
    );
}

export default withStyles(styles)(TextInput);