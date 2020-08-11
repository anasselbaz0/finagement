import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import LoginForm from "./LoginForm";
import {openLogin, openSignUp, setLoginEmail, setLoginPassword} from "../../state/auth/actions";
import SignUpForm from "./SignUpForm";

const styles = {
    container: {
        height: '80%',
        width: '90%',
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontWeight: 600,
        fontSize: '2rem',
        color: COLORS.white,
    },
    subTitle: {
        marginTop: '1rem',
        fontSize: '1rem',
        fontWeight: 'normal',
    },
    form: {
        padding: '1rem',
        flex: 1,
        height: '100%',
        backgroundColor: COLORS.c1,
        color: COLORS.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
    },
    formTitle: {
        color: COLORS.white,
        fontWeight: 600,
        fontSize: '2rem',
        marginBottom: '2rem',
    },
}


class Login extends Component {
    render() {
        const {classes} = this.props;
        let form;
        if (this.props.loginOpened) form = <div className={classes.form}>
            <div className={classes.formContainer}>
                <div className={classes.formTitle}> Login </div>
                <LoginForm/>
            </div>
        </div>;
        if (this.props.signUpOpened) form = <div className={classes.form}>
            <div className={classes.formContainer}>
                <div className={classes.formTitle}> Sign Up </div>
                <SignUpForm/>
            </div>
        </div>;
        return (
            <div className={classes.container}>
                <div className={classes.title}>
                    <span> Finagement </span>
                    <span className={classes.subTitle}>
                        Every time you borrow money, you're robbing your future self.
                    </span>
                </div>
                {form}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loginOpened: state.auth.loginOpened,
        signUpOpened: state.auth.signUpOpened,
    }
}

export default connect(mapStateToProps)(withStyles(styles)(Login));