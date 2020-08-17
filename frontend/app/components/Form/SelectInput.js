import React from 'react';
import COLORS from "../../utils/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";

const styles = {
    '.MuiInputLabel-root': {
        color: COLORS.lightGray
    },
    'MuiInput-underline': {
        borderBottomColor: COLORS.c6,
    },
    formInput: {
        width: '100%',
        marginBottom: '4px',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiFormLabel-root': {
            color: COLORS.lightGray
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
        },
        '& .MuiInput-root': {
            '& fieldset': {
                borderColor: COLORS.white,
                color: COLORS.white,
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
            color: COLORS.white,
        }
    },
    error: {
        color: COLORS.error,
        fontSize: '.8rem',
    },
    label: {
        color: COLORS.lightGray
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
                <InputLabel className={classes.label}> {label} </InputLabel>
                <Select
                    labelId={props.label}
                    className={classes.formInput}
                    name={props.label}
                    value={props.value}
                    onChange={props.onChange}
                >
                    {
                        props.options.map(option =>
                            <MenuItem value={option}> {option} </MenuItem>
                        )
                    }
                </Select>
                <div className={classes.error}> {props.error} </div>
            </FormControl>
    );
}

export default withStyles(styles)(TextInput);