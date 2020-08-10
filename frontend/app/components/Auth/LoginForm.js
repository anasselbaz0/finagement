import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import TextField from "@material-ui/core/TextField";
import Button from "../Button/Button";

const styles = {
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        maxWidth: '300px'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    },
    title: {
        color: COLORS.c1,
        fontWeight: 600,
        fontSize: '2rem',
        marginBottom: '2rem',
    },
    formInput: {
        marginBottom: '1rem',
    },
    link: {
        color: COLORS.c5,
        fontWeight: 600,
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline',
        }
    },
    instructions: {
        marginTop: '1rem',
        lineHeight: '1.3rem'
    }
}


class LoginForm extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.formContainer}>
                <div className={classes.title}> Login </div>
                {/*<div className={classes.title}> {this.props.title} </div>*/}
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField className={classes.formInput} required variant="filled" id="standard-required" label="E-mail"/>
                    <TextField
                        className={classes.formInput}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                </form>
                <Button> Login </Button>
                {/*<Button> {this.props.title} </Button>*/}
                <div className={classes.instructions}>
                    <span className={classes.link}> Forgot password? </span> <br/>
                    <span> You don't have an account? <span className={classes.link}> SignUp! </span> </span>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForm);