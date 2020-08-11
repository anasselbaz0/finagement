import React, {Component} from 'react';
import {connect} from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import COLORS from "../../utils/colors";
import Button from "../Button/Button";
import {
    openLogin,
    setLoginEmail,
    setLoginPassword,
    setSignUpEmail,
    setSignUpEmailConfirmation,
    setSignUpPassword, setSignUpPasswordConfirmation
} from "../../state/auth/actions";
import TextInput from "../Form/TextInput";

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

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextInput
                        required
                        label="E-mail"
                        value={this.props.signUp.email}
                        onChange={this.props.setSignUpEmail}
                    />
                    <TextInput
                        required
                        label="Confirm E-mail"
                        value={this.props.signUp.emailConfirmation}
                        onChange={this.props.setSignUpPassword}
                    />
                    <TextInput
                        required
                        label="Password"
                        type="password"
                        value={this.props.signUp.password}
                        onChange={this.props.setSignUpEmailConfirmation}
                    />
                    <TextInput
                        required
                        label="Confirm Password"
                        type="password"
                        value={this.props.signUp.passwordConfirmation}
                        onChange={this.props.setSignUpPasswordConfirmation}
                    />
                </form>
                <Button> Create account </Button>
                <div className={classes.instructions}>
                    <span> You already have an account? <span className={classes.link} onClick={this.props.openLogin}> Login! </span> </span>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signUp: state.auth.signUp,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSignUpEmail: (event) => dispatch(setSignUpEmail(event.target.value)),
        setSignUpPassword: (event) => dispatch(setSignUpPassword(event.target.value)),
        setSignUpEmailConfirmation: (event) => dispatch(setSignUpEmailConfirmation(event.target.value)),
        setSignUpPasswordConfirmation: (event) => dispatch(setSignUpPasswordConfirmation(event.target.value)),
        openLogin: () => dispatch(openLogin()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginForm));