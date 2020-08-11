import React, {Component} from 'react';
import COLORS from "../../utils/colors";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";

const styles = {
    formInput: {
        maxWidth: '350px',
        marginBottom: '1rem',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiFormLabel-root': {
            color: COLORS.lightGray
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: COLORS.gray,
                color: COLORS.white,
            },
            '&:hover fieldset': {
                borderColor: COLORS.lightGray,
                color: COLORS.white,
            },
            '&.Mui-focused fieldset': {
                borderColor: COLORS.gray,
                color: COLORS.white,
            },
        },
        '& .MuiInputBase-input': {
            color: COLORS.white,
        }
    },
}

class TextInput extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <TextField
                className={classes.formInput}
                required={this.props.required}
                variant="outlined"
                type={this.props.type}
                label={this.props.label}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        );
    }

}

export default withStyles(styles)(TextInput);