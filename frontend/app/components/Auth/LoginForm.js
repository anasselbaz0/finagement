import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import Button from "../General/Button";
import {
    openSignUp,
    resetForms,
    setLoginPassword,
    setLoginUsername,
    tryLogin
} from "../../state/auth/actions";
import TextInput from "../Form/TextInput";
import Dimmer from "semantic-ui-react/dist/commonjs/modules/Dimmer";
import Loader from "semantic-ui-react/dist/commonjs/elements/Loader";
import {toast} from "react-toastify";

const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
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
    },
}

class LoginForm extends Component {

    render() {
        if (this.props.login.fail) {
            toast.error('Failed to login :/ Try again !', {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.props.resetForms();
        }
        const {classes} = this.props;
        return (
            <React.Fragment>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextInput
                        required
                        label="Username"
                        value={this.props.login.username}
                        onChange={this.props.setLoginUsername}
                    />
                    <TextInput
                        required
                        label="Password"
                        type="password"
                        value={this.props.login.password}
                        onChange={this.props.setLoginPassword}
                    />
                </form>
                <Button onClick={() => this.tryLogin(
                    this.props.login.username,
                    this.props.login.password
                )}> Login </Button>
                <Dimmer size={'massive'} active={this.props.login.loading}>
                    <Loader />
                </Dimmer>
                <div className={classes.instructions}>
                    <span className={classes.link}> Forgot password? </span> <br/>
                    <span> You don't have an account? <span className={classes.link} onClick={this.props.openSignUp}> Create a new account! </span> </span>
                </div>
            </React.Fragment>
        );
    }

    tryLogin = (username, password) => {
        if (username.length === 0 || password.length === 0) {
            toast.warning('The username or the password or both are missing!', {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            this.props.tryLogin(username, password);
        }
    }

}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLoginUsername: (event) => dispatch(setLoginUsername(event.target.value)),
        setLoginPassword: (event) => dispatch(setLoginPassword(event.target.value)),
        openSignUp: () => dispatch(openSignUp()),
        tryLogin: (username, password) => dispatch(tryLogin(username, password)),
        resetForms: () => dispatch(resetForms()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));