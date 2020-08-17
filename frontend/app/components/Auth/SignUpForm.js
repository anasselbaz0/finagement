import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import Button from "../General/Button";
import {
    openLogin, resetForms,
    setSignUpEmail,
    setSignUpPassword, setSignUpPasswordConfirmation, setSignUpUsername, trySignUp
} from "../../state/auth/actions";
import TextInput from "../Form/TextInput";
import {SignUpRequest} from "./Model";
import Loader from "semantic-ui-react/dist/commonjs/elements/Loader";
import Dimmer from "semantic-ui-react/dist/commonjs/modules/Dimmer";
import {toast} from "react-toastify";


const styles = {
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
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

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.signUp.success) {
            toast.success('Account created successfully :) Login NOW', {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            this.props.resetForms();
        } else if (this.props.signUp.fail) {
            toast.error('Failed to create the account :/', {
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
                        value={this.props.signUp.username}
                        onChange={this.props.setSignUpUsername}
                    />
                    <TextInput
                        required
                        label="E-mail"
                        value={this.props.signUp.email}
                        onChange={this.props.setSignUpEmail}
                    />
                    <TextInput
                        required
                        label="Password"
                        type="password"
                        value={this.props.signUp.password}
                        onChange={this.props.setSignUpPassword}
                    />
                    <TextInput
                        required
                        label="Confirm Password"
                        type="password"
                        value={this.props.signUp.passwordConfirmation}
                        onChange={this.props.setSignUpPasswordConfirmation}
                    />
                </form>
                <Dimmer size={'massive'} active={this.props.signUp.loading}>
                    <Loader />
                </Dimmer>
                <Button onClick={this.createAccount}> Create account </Button>
                <div className={classes.instructions}>
                    <span> You already have an account? <span className={classes.link} onClick={this.props.openLogin}> Login! </span> </span>
                </div>
            </React.Fragment>
        );
    }

    createAccount = () => {
        if (this.props.signUp.password === this.props.signUp.passwordConfirmation
        && this.props.signUp.username.length>0 && this.props.signUp.email.length>0) {
            const signUpRequest = new SignUpRequest(
                this.props.signUp.username,
                this.props.signUp.email,
                this.props.signUp.password
            );
            this.props.trySignUp(signUpRequest);
        } else if (this.props.signUp.password !== this.props.signUp.passwordConfirmation) {
            toast.warning('Passwords doesn\'t match.', {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else if (this.props.signUp.username.length===0 || this.props.signUp.email.length===0) {
            toast.warning('The username or the E-mail or both are missing!', {
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
}

const mapStateToProps = (state) => {
    return {
        signUp: state.auth.signUp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignUpUsername: (event) => dispatch(setSignUpUsername(event.target.value)),
        setSignUpEmail: (event) => dispatch(setSignUpEmail(event.target.value)),
        setSignUpPassword: (event) => dispatch(setSignUpPassword(event.target.value)),
        setSignUpPasswordConfirmation: (event) => dispatch(setSignUpPasswordConfirmation(event.target.value)),
        openLogin: () => dispatch(openLogin()),
        trySignUp: (signUpRequest) => dispatch(trySignUp(signUpRequest)),
        resetForms: () => dispatch(resetForms()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));