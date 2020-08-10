import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import LoginForm from "./LoginForm";

const styles = {
    container: {
        height: '70%',
        width: '70%',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        padding: '1rem',
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.c5o,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontWeight: 600,
        fontSize: '2rem',
        color: COLORS.white,
    },
    loginForm: {
        padding: '1rem',
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.c8o,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
}


class Login extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    Finagement
                </div>
                <div className={classes.loginForm}>
                    <LoginForm/>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Login);